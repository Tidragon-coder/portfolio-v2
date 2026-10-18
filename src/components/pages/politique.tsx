import React from "react";

import Header from '../organisms/header';
import Footer from '../organisms/footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto pt-36 pb-20 px-6 text-white/80 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Politique de Confidentialité</h1>
        <p className="mb-6 text-sm text-white/50">Dernière mise à jour : 18/10/2026</p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">1. Introduction</h2>
        <p className="mb-6 text-sm sm:text-base">
          Cette politique de confidentialité explique quelles données personnelles peuvent être traitées
          lors de votre visite sur le portfolio de Théo Spetebroot, et comment elles sont protégées.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">2. Hébergement</h2>
        <p className="mb-2 text-sm sm:text-base">Ce site est hébergé par OVH, une société spécialisée dans l’hébergement web :</p>
        <p className="mb-2 text-sm sm:text-base">
          <strong>OVH SAS</strong><br />
          2 Rue Kellermann, 59100 Roubaix, France<br />
          Site web : <a href="https://www.ovh.com" className="text-highlight underline hover:text-white">www.ovh.com</a>
        </p>
        <p className="mb-2 text-sm sm:text-base">Comme tout hébergeur, OVH enregistre des données techniques nécessaires au fonctionnement et à la sécurité des serveurs :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Adresses IP des visiteurs (logs de connexion).</li>
          <li>Date et heure des requêtes, pages demandées et type de navigateur.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">Ces données sont gérées conformément à la politique de confidentialité d’OVH.</p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">3. Données collectées</h2>
        <p className="mb-2 text-sm sm:text-base">Ce site est un portfolio statique :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>il ne contient aucun formulaire et ne vous demande aucune information ;</li>
          <li>il n’utilise aucun cookie ;</li>
          <li>il n’utilise aucun outil de statistiques ou de suivi publicitaire.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">
          Si vous me contactez par e-mail, j’ai uniquement accès aux informations que vous choisissez de m’envoyer
          (adresse e-mail, nom, contenu du message).
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">4. Services tiers</h2>
        <p className="mb-2 text-sm sm:text-base">
          La police d’écriture du site est chargée depuis <strong>Google Fonts</strong>. Lors de ce chargement,
          votre navigateur se connecte aux serveurs de Google, qui reçoivent votre adresse IP.
        </p>
        <p className="mb-6 text-sm sm:text-base">
          Ces données sont traitées conformément à la&nbsp;
          <a href="https://policies.google.com/privacy" className="text-highlight underline hover:text-white">
            politique de confidentialité de Google
          </a>.
        </p>
        <p className="mb-6 text-sm sm:text-base">
          Le site contient aussi des liens vers des sites externes (GitHub, LinkedIn, sites de projets).
          Ces sites ont leur propre politique de confidentialité.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">5. Finalité et conservation</h2>
        <p className="mb-6 text-sm sm:text-base">
          Les e-mails reçus sont utilisés uniquement pour répondre à votre demande. Ils ne sont ni partagés
          avec des tiers, ni revendus, et sont conservés au maximum 12 mois après le dernier échange,
          sauf obligation légale contraire.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">6. Vos droits</h2>
        <p className="mb-2 text-sm sm:text-base">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li><strong>Droit d’accès :</strong> consulter les données personnelles détenues.</li>
          <li><strong>Droit de rectification :</strong> corriger ou mettre à jour vos données.</li>
          <li><strong>Droit à l’effacement :</strong> demander la suppression de vos informations.</li>
          <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
          <li><strong>Droit d’opposition :</strong> refuser certains traitements.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">
          Pour exercer vos droits, contactez : <a href="mailto:theo.spetebroot@gmail.com" className="text-highlight underline hover:text-white">theo.spetebroot@gmail.com</a>.
          Vous pouvez aussi adresser une réclamation à la <a href="https://www.cnil.fr" className="text-highlight underline hover:text-white">CNIL</a>.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-10 mb-3">7. Contact</h2>
        <p className="text-sm sm:text-base">
          <strong>Théo Spetebroot</strong><br />
          Email : <a href="mailto:theo.spetebroot@gmail.com" className="text-highlight underline hover:text-white">theo.spetebroot@gmail.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
