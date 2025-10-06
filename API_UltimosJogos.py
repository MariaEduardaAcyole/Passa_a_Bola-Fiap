from flask import Flask, jsonify
from flask_cors import CORS
import requests
import pandas as pd

app = Flask(__name__)
CORS(app)  # libera acesso do Next.js


def get_ultimos_10_jogos_paulistao_feminino():
    url = "https://www.sofascore.com/api/v1/unique-tournament/10257/season/73097/team-events/total"
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()

    jogos = []
    jogos_vistos = set()  # Controla IDs já processados
    tournament_data = data.get("tournamentTeamEvents", {})

    for torneio_id, times in tournament_data.items():
        for time_id, partidas in times.items():
            for e in partidas:
                if e.get("status", {}).get("type") == "finished":
                    jogo_id = e.get("id")

                    # Só adiciona se ainda não foi visto
                    if jogo_id not in jogos_vistos:
                        jogos_vistos.add(jogo_id)
                        jogos.append(e)

    jogos.sort(key=lambda e: e["startTimestamp"], reverse=True)
    ultimos_20 = jogos[:30]

    resultados = []
    for e in ultimos_20:
        mandante = e["homeTeam"]["name"]
        visitante = e["awayTeam"]["name"]
        placar_mandante = e["homeScore"]["current"]
        placar_visitante = e["awayScore"]["current"]
        data_jogo = pd.to_datetime(
            e["startTimestamp"], unit="s").strftime("%d/%m/%Y %H:%M")
        torneio = e["tournament"]["uniqueTournament"]["name"].strip()

        resultados.append({
            "torneio": torneio,
            "data": data_jogo,
            "mandante": mandante,
            "visitante": visitante,
            "placar": f"{placar_mandante} x {placar_visitante}"
        })

    return resultados


@app.route("/jogos", methods=["GET"])
def jogos():
    return jsonify({"jogos": get_ultimos_10_jogos_paulistao_feminino()})


if __name__ == "__main__":
    # host=0.0.0.0 deixa acessível no Postman/Next
    app.run(host="0.0.0.0", port=8000, debug=True)
