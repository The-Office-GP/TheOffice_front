import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from "react-chartjs-2";
import {paletteColors} from "../../../../@styles/paletteColors";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CardSellProduct: FC<{}> = ({}) => {
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'], // Les mois de l'année
        datasets: [
            {
                label: 'Product1', // Label pour la première série de données
                data: [40, 45, 50, 55, 60, 70], // Les données de la série SalesHigh
                backgroundColor: paletteColors.pastelBlue,
            },
            {
                label: 'Product2', // Label pour la deuxième série de données
                data: [25, 30, 35, 40, 45, 50], // Les données de la série SalesMid
                backgroundColor: paletteColors.mediumBlue,
            },
            {
                label: 'Product3', // Label pour la troisième série de données
                data: [10, 15, 20, 25, 30, 35], // Les données de la série SalesLow
                backgroundColor: paletteColors.deepBlue,
            },
            {
                label: 'Product4', // Label pour la troisième série de données
                data: [10, 15, 20, 25, 30, 35], // Les données de la série SalesLow
                backgroundColor: paletteColors.white,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                type: 'linear' as const,
                ticks: {
                    callback: (tickValue: string | number) => {
                        if (typeof tickValue === 'number' && tickValue % 10 === 0) {
                            return tickValue; // Affiche uniquement les multiples de 10
                        }
                        return ''; // Sinon, retourne une chaîne vide
                    },
                },
                beginAtZero: true, // Facultatif : fait commencer l'axe Y à zéro
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Personnaliser l'info-bulle
                    },
                },
            },
        },
    };

    return (
        <div className="card-dashboard card-stats mb-4 mb-xl-0">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h3 className="card-title text-uppercase text-muted mb-0">Traffic</h3>
                        <span className="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2"> 3.48%
                    </span>
                    <span className="text-nowrap">Since last month</span>
                </p>
                {/* Affichage du graphique */}
                <Bar data={data} options={options} style={{width: '500px'}}/>
            </div>
        </div>
    );
};

export default CardSellProduct;