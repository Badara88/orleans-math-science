# Orléans Math Science — refonte statique

Site vitrine complet en HTML/CSS/JavaScript, sans compilation. Le formulaire utilise le compte Formspree déjà présent dans le code initial. Le domaine est déjà en ligne : conserver son hébergeur et son paramétrage DNS. Déployer `index.html`, `merci.html`, `styles.css`, `script.js` et le dossier `assets` à la racine du projet actuel, puis publier avec sa méthode habituelle. Si le projet est relié à GitHub/Vercel, remplacer les fichiers dans le dépôt et lancer le déploiement. Si le projet utilise Netlify Drop, déposer le dossier complet. Tester d’abord sur une prévisualisation et conserver une copie des anciens fichiers. Cette archive ne modifie pas le site en ligne.

## Diagnostic fondé sur les captures et la page indexée

- La page actuelle présente déjà les cours, les prix et les coordonnées. Sa hiérarchie visuelle est uniforme et la proposition de valeur reste générale.
- Les trois témoignages visibles ne donnent ni date, ni nom identifiable, ni source. Leur authenticité n’a pas pu être vérifiée. La nouvelle section attend des avis recueillis avec autorisation et n’en invente aucun.
- L’offre « premier cours offert », les prix, les qualifications et l’ancienneté affichés doivent être confirmés avant publication. Le site indexé indique à la fois « 10+ ans d’enseignement » et « professeur depuis 2018 » : harmoniser ces formulations.
- Le formulaire actuel existe, mais son traitement côté serveur n’a pas été vérifié. Le code source transmis révèle un formulaire Formspree avec l’identifiant `xldadezv` et une redirection vers `merci.html`. La refonte conserve cette configuration ; il faut vérifier dans le compte Formspree que le formulaire est actif et que le domaine/redirection sont autorisés.

## Avant publication

1. Confirmer les tarifs, la disponibilité de l’offre, le nom, les diplômes, la zone des cours à domicile, le téléphone et l’adresse e-mail. Retirer les phrases de vérification visibles dans les sections « professeur » et « tarifs » après confirmation.
2. Ajouter les mentions légales, l’identité professionnelle et une politique de confidentialité adaptées à l’activité et au véritable traitement des données. Remplacer le rappel du pied de page.
3. Recueillir des témoignages datés et autorisés, avec attribution et source. Les saisir dans `approvedReviews` dans `script.js`. Ne publier que les informations que leurs auteurs permettent d’afficher.
4. Vérifier la réception Formspree en envoyant une demande test, la protection antispam, la redirection `merci.html` et la politique de confidentialité. L’envoi transmet des données au prestataire Formspree.
5. Remplacer éventuellement le monogramme « BD. » par une vraie photographie professionnelle autorisée. Le symbole atome avec flèche, sans inscriptions, a été redessiné en SVG d’après les nouveaux visuels fournis.

## Vérification rapide

Ouvrir `index.html` dans un navigateur ; vérifier le menu mobile, les ancres, les liens téléphone et e-mail, puis soumettre une demande test et confirmer sa réception dans Formspree ou la boîte associée. Aucun témoignage fictif n’apparaît par défaut.
