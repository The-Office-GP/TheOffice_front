import {FC} from 'react';
import "../../../../@styles/main/components/companyPage/gameDashboard.css"
import "../../../../@styles/main/components/companyPage/dashboard/DashboardTable.css"
import {CompanyDetailsType} from "../../../../@types/companyType";



const CardTableSalary: FC<{company:CompanyDetailsType}> = ({company}) => {
    const totalEmployeeLevel = company.employees.reduce(
        (accumulator, currentValue) => accumulator + currentValue.level,
        0  // Initial value of the accumulator
    );

    return (
        <div className="card-dashboard shadow">
            <div className="card-header border-0">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Employee : niveau moyen({totalEmployeeLevel/company.employees.length})</h3>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Niveau</th>
                        <th scope="col">Status</th>
                        <th scope="col">Santé</th>
                    </tr>
                    </thead>
                    <tbody>
                    {company.employees.map((employee) => (
                        <tr>
                            <th scope="row">
                                {employee.name}
                            </th>
                            <td>
                                {employee.level}
                            </td>
                            <td>
                                {employee.status}
                            </td>
                            <td>
                                {employee.health}
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CardTableSalary;