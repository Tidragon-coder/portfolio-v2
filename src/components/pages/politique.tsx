import React from "react";

import Header from '../organisms/header';
import Footer from '../organisms/footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-20 px-4 py-10 text-justify text-white
                      sm:max-w-xl sm:px-6
                      md:max-w-3xl
                      lg:max-w-4xl
                      xl:max-w-5xl
                      2xl:max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Politique de Confidentialité</h1>
        <p className="mb-6 text-sm sm:text-base">Dernière mise à jour : 27/06/2025</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">1. Introduction</h2>
        <p className="mb-6 text-sm sm:text-base">
          Cette politique de confidentialité explique comment Théo Spetebroot collecte,
          utilise et protège les données personnelles des visiteurs de son site portfolio.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">2. Hébergement</h2>
        <p className="mb-2 text-sm sm:text-base">Ce site est hébergé par OVH, une société spécialisée dans l’hébergement web :</p>
        <p className="mb-2 text-sm sm:text-base">
          <strong>OVH SAS</strong><br />
          2 Rue Kellermann, 59100 Roubaix, France<br />
          Site web : <a href="https://www.ovh.com" className="text-blue-400 underline">www.ovh.com</a>
        </p>
        <p className="mb-2 text-sm sm:text-base">OVH peut collecter certaines données techniques pour assurer le bon fonctionnement des serveurs :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Adresses IP des visiteurs (logs de connexion).</li>
          <li>Données de navigation pour des raisons de sécurité.</li>
          <li>Statistiques techniques sur l’utilisation du serveur.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">Ces données sont gérées conformément à la politique de confidentialité d’OVH.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">3. Données collectées</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-1">3.1. Informations fournies volontairement</h3>
        <p className="mb-2 text-sm sm:text-base">Lorsque vous utilisez le formulaire de contact, nous collectons uniquement les informations que vous fournissez :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Nom</li>
          <li>Adresse e-mail</li>
          <li>Message</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">Aucune autre donnée personnelle n’est collectée, et le site ne stocke pas d’informations sur votre navigation.</p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-1">3.2. Données collectées par Google Search Engine</h3>
        <p className="mb-2 text-sm sm:text-base">Ce site utilise Google Search Engine pour la recherche. Google peut collecter :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Adresses IP</li>
          <li>Cookies et identifiants uniques</li>
          <li>Requêtes de recherche</li>
          <li>Données de navigation</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">
          Ces données sont traitées conformément à la&nbsp;
          <a href="https://policies.google.com/privacy" className="text-blue-400 underline">
            politique de confidentialité de Google
          </a>.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">4. Finalité du traitement</h2>
        <p className="mb-2 text-sm sm:text-base">Les données collectées via le formulaire de contact sont utilisées exclusivement pour :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Répondre à vos demandes et messages.</li>
          <li>Fournir des informations sur nos services si vous en faites la demande.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">Ces informations ne sont ni partagées avec des tiers, ni revendues.</p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">5. Conservation des données</h2>
        <p className="mb-6 text-sm sm:text-base">
          Les données soumises via le formulaire de contact sont conservées pour une durée maximale de 12 mois après la dernière interaction, sauf obligation légale contraire.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">6. Sécurité des données</h2>
        <p className="mb-2 text-sm sm:text-base">Nous mettons en place des mesures de sécurité appropriées :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li>Stockage sécurisé des e-mails et formulaires de contact.</li>
          <li>Accès restreint aux informations collectées.</li>
          <li>Hébergement sécurisé par OVH avec protection des serveurs.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">7. Vos droits</h2>
        <p className="mb-2 text-sm sm:text-base">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mb-6 text-sm sm:text-base">
          <li><strong>Droit d’accès :</strong> consulter les données personnelles détenues.</li>
          <li><strong>Droit de rectification :</strong> corriger ou mettre à jour vos données.</li>
          <li><strong>Droit à l’effacement :</strong> demander la suppression de vos informations.</li>
          <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
          <li><strong>Droit d’opposition :</strong> refuser certains traitements.</li>
        </ul>
        <p className="mb-6 text-sm sm:text-base">Pour exercer vos droits, contactez : <a href="mailto:theo.spetebroot@gmail.com" className="text-blue-400 underline">theo.spetebroot@gmail.com</a></p>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">8. Contact</h2>
        <p className="text-sm sm:text-base">
          <strong>Théo Spetebroot</strong><br />
          Email : <a href="mailto:theo.spetebroot@gmail.com" className="text-blue-400 underline">theo.spetebroot@gmail.com</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
