import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from "react-chartjs-2";
import {paletteColors} from "../../../../@styles/paletteColors";
import {CompanyDetailsType, Statistic} from "../../../../@types/companyType";

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CardSellProduct: FC<{company:CompanyDetailsType}> = ({company}) => {
    function updateTheProduct1(sector: string){
        switch(sector){
            case "carpentry":
                return "Palette"
            case "creamery":
                return "Lait"
            case "quarry":
                return "Argile"
        }
    }

    function updateTheProduct2(sector: string) {
        switch (sector) {
            case "carpentry":
                return "Table"
            case "creamery":
                return "Fromage"
            case "quarry":
                return "Ciment"
        }
    }

    function updateTheProduct3(sector: string) {
        switch (sector) {
            case "carpentry":
                return "Chaise"
            case "creamery":
                return "Crême fraiche"
            case "quarry":
                return "Marbre"
        }
    }

    function updateTheProduct4(sector: string) {
        switch (sector) {
            case "carpentry":
                return "Cabane"
            case "creamery":
                return "Beurre"
            case "quarry":
                return "Pierre"
        }
    }

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'], // Les mois de l'année
        datasets: [
            {
                label: updateTheProduct1(company.sector),
                data: company.statistic.map((element) => element.product1HighQtyProd+element.product1MidQtyProd+element.product1LowQtyProd),
                backgroundColor: paletteColors.pastelBlue,
            },
            {
                label: updateTheProduct2(company.sector),
                data: company.statistic.map((element) => element.product2HighQtyProd + element.product2MidQtyProd + element.product2LowQtyProd),
                backgroundColor: paletteColors.mediumBlue,
            },
            {
                label: updateTheProduct3(company.sector), // Label pour la troisième série de données
                data: company.statistic.map((element) => element.product3HighQtyProd + element.product3MidQtyProd + element.product3LowQtyProd),
                backgroundColor: paletteColors.deepBlue,
            },
            {
                label: updateTheProduct4(company.sector), // Label pour la troisième série de données
                data: company.statistic.map((element) => element.product4HighQtyProd + element.product1MidQtyProd + element.product1LowQtyProd),
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
                        <h3 className="card-title text-uppercase text-muted mb-0">Production</h3>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-muted text-sm">
                    <span className="text-success mr-2">
                    </span>
                    <span className="text-nowrap">Production des derniers cycles</span>
                </p>
                {/* Affichage du graphique */}
                <Bar data={data} options={options} style={{width: '500px'}}/>
            </div>
        </div>
    );
};

export default CardSellProduct;