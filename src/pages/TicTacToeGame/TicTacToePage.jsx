import Game from "./game.jsx";
import PageTitle from "../../components/pageTitle/PageTitle.jsx";

export default function TicTacToePage() {
    return (
        <div>
            <PageTitle>Tic-Tac-Toe</PageTitle>

            <Game />
        </div>
    );
}
