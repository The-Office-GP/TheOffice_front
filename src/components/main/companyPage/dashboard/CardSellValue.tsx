import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement} from 'chart.js';
import {paletteColors} from "../../../../@styles/paletteColors";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);


const CardSellValue: FC<{}> = ({}) => {
    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov','Dec'],
        datasets: [
            {
                label: 'CA',
                data: [0, 20, 10, 30, 15, 40, 20, 80, 60, 0, 10, 50],
                borderColor: paletteColors.orange,
                backgroundColor: paletteColors.yellow,
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: (tickValue: string | number) => {
                        // Si tickValue est un nombre, on peut retourner une chaîne formatée
                        if (typeof tickValue === 'number') {
                            return tickValue % 10 === 0 ? `$${tickValue}k` : ''; // Ajout du format monétaire
                        }
                        return tickValue;
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `$${tooltipItem.raw}k`; // Affichage personnalisé de l'info-bulle
                    },
                },
            },
        },
    };

    return (
        <div className="card-dashboard bg-gradient-default shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                        <span className="h2 font-weight-bold mb-0">500,000</span>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success2 mr-2"> 5.24%</span>
                    <span className="text-nowrap">Cette année</span>
                </p>
                <Line data={data} options={options} style={{width: '500px'}}/>
            </div>
        </div>
    );
};

export default CardSellValue;
