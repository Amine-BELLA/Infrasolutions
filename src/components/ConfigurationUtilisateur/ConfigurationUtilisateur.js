import React from "react";
import "./ConfigurationUtilisateur.css"
import InputField from "../InputField/InputField";

function ConfigurationUtilisateur() {
    return (
        <div className="config-container">
            <h5> Configuration > Utilisateurs</h5>
            <div className="input-layout">
                <div>
                    <InputField description="Nom" />
                    <InputField description="Prénom" />
                    <InputField description="Service" />
                    <InputField description="Direction" />
                </div>
                <div>
                    <InputField description="Télephone" />
                    <InputField description="Email" />
                    <InputField description="Mot de passe" />
                    <InputField description="Confirmation du mot de passe" />
                </div>   
            </div>
            <div className="add-user">
                    <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-sync-alt"></i> Modifier</button>
                    <button type="button" class="btn btn-success btn-sm"><i class="far fa-user"></i> Ajouter Utilisateur</button>
                    <button type="button" class="btn btn-danger btn-sm"><i class="fas fa-user-times"></i> Supprimer</button>
            </div>

        </div>
    );
}

export default ConfigurationUtilisateur;