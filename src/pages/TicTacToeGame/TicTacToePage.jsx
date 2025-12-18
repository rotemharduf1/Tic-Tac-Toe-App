import Game from "./game.jsx";
import PageTitle from "../../components/pageTitle/pageTitle.jsx";

export default function TicTacToePage() {
    return (
        <div>
            <PageTitle>Tic-Tac-Toe</PageTitle>

            <Game />
        </div>
    );
}
