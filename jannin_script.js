document.addEventListener("DOMContentLoaded", () => {

    const description = {
        "diwan.jpg":"J'ai commencé ma scolarité au sein de l'école <a href='https://www.diwan.bzh/fr/etablissements/skol-diwan-an-oriant'>Diwan</a>  de Lorient. J'y ai passé l'entierté de ma maternelle et de ma primaire dans un univers billingue Breton - Français.",
        "henri-wallon.jpg":"J'ai effectué mes année de collège au sein de l'établissement <a href='https://www.collegehenriwallon-lanester.ac-rennes.fr/'>Henri-Wallon</a> de Lanester. Durant l'entierté de ces années, j'ai suivi l'option Breton me permettant de pratiquer une langue suplémentaire. Entre 2020 et 2022 j'ai additionnelement suivi l'option Grec Antique qui m'a permit de découvrir l'ancienne culture grec ainsi que sa langue. Je considère qu'il est important de s'investir au sein de son établissement et c'est pourquoi j'ai participé plusieurs fois à la vie du collège en animant par exemple les goûters de Noël.",
        "colbert.jpg":"Après ma mention &quot très bien &quot au Brevet des collèges, je suis entré dans le lycée <a href='https://lycee-colbert-lorient.com/'>Colbert</a>  à Lorient et être séléctionné pour participer à l'option Robotics 2.0. Notre option a ainsi remporté le concours Robofesta organisé à la Faculté des sciences de Lorient. <br> En première j'ai souhaité prendre les spécialités Maths, SI et NSI pour ne garder en terminale que Maths et NSI. <br><br> Durant mes années passé au lycée j'ai fait preuve d'un grand investissement dans la vie de l'établissement. J'ai fait parti de l'option badmington et je suis devenu un membre actif de la maison des lycéens.",
        "ensibs.jpeg":"Suite à un Bac avec mention bien, j'ai décidé d'integrer l' <a href='https://www-ensibs.univ-ubs.fr/fr/index.html'>ENSIBS</a> de Lorient en parcours préparatoire à l'école d'ingénieur. L'école me permet d'explorer pleinement mes centres d'interêts grace à se matières variés et ses nombreux projets. Je prévois de réaliser l'entierté de mon parcours préparatoir sur le site de Lorient.",
        "ensibs_vannes.jpg":"Je prévois d'integrer la section cyber-défense de mon école d'ingénieur d'ici septembre 2027. Ce parcours nécessite de trouver une entreprise me permettant un aprentissage par alternance. Je suis enthousiaste à l'idée d'entrer dans une entreprise car j'ai découvert cette école à l'âge de 15 ans et j'ai tout de suite su que je voulais atteindre cette filière et travailler dans ce domaine. Cette rubrique reste orienté vers le futur mais je travaille dur afin de devenir Ingénieur en cybersécurité et j'ai réussi à faire une partie du chemin alors je suis grandement motivé à atteindre mes objectifs.",
    };

    const zone = document.getElementById("description-text");

    document.addEventListener("click", (e) => {
        const nom = e.target.getAttribute("src");
        // Remplacer textContent par innerHTML pour accepter les liens
        zone.innerHTML = description[nom] || "Aucune description disponible";
    });

});