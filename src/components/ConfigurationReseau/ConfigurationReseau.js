import React from "react";
import "./ConfigurationReseau.css"
import InputField from "../InputField/InputField";

function ConfigurationReseau() {
    return (
        <div className="reseau-container">
            <h5> Configuration > Réseau</h5>
            <div className="reseau-layout">
                <div>
                    <InputField description="Région" />
                    <InputField description="Province" />
                    <InputField description="ID" />
                </div>
                <div>
                    <InputField description="Fournisseur" />
                    <InputField description="Modèle" />
                    <InputField description="Coordonnées GPS" />
                </div>
            </div>
            <div className="ajouter-reseau">
                <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-sync-alt"></i> Modifier</button>
                <button type="button" class="btn btn-success btn-sm"><i class="fas fa-project-diagram"></i> Ajouter Réseau</button>
                <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-minus"></i> Supprimer</button>
            </div>
        </div>

    );
}

export default ConfigurationReseau;