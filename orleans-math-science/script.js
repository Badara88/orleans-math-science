const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Ouvrir le menu':'Fermer le menu');nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Ouvrir le menu')}));
document.querySelector('#year').textContent=new Date().getFullYear();
// Avis validés uniquement : remplacer ce tableau par des témoignages recueillis avec autorisation.
// Exemple de structure : {texte:'...', auteur:'Prénom ou initiales', contexte:'Parent d’élève, lycée', date:'juin 2026', source:'Avis Google / message autorisé'}
const approvedReviews=[];
if(approvedReviews.length){const list=document.querySelector('#reviews-list');list.replaceChildren();list.style.display='grid';list.style.gridTemplateColumns='repeat(auto-fit,minmax(260px,1fr))';list.style.gap='16px';approvedReviews.forEach(review=>{const article=document.createElement('article');article.className='review-card';const quote=document.createElement('blockquote');quote.textContent='“'+review.texte+'”';const footer=document.createElement('footer');footer.textContent=[review.auteur,review.contexte,review.date,review.source].filter(Boolean).join(' · ');article.append(quote,footer);list.append(article)})}
