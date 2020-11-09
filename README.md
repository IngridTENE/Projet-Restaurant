#Ingrid Daniele TENE MAFFO ---M1 MIAGE

***LES FICHIERS DU PROJET SONT DANS LA BRANCHE "master"***

# Projet-Restaurant
Mini projet donnée en cours de technologie Web 

Dans ce projet j'ai pu passer du mode interprté  au mode compilé, en utilisant "vue create projet", ce qui à contribuer à rendre le debuggage moins fastidieux.
J'ai réussie à intégrer la bibliothèque "vue material" pour mettre en forme l'application

j'ai pu implémenté un meilleur affichage de la page en mettent une sorte de menu à gauche et la page principale au centre

j'ai également créer des composants vue tels que : 


**Menu**
Qui est en fait la page d'acceuil de l'application, et présente la carte de différents restaurants avec photos

**LaListeDesRestaurants**
Qui présente  un tableau liste des restaurants avec leur nom, la cuisine qui'il propose et la ville dans la quelle il se trouve.
On peut inserer un restaurant en entrant son nom, sa cuisine et sa ville, 
supprimmer un restaurant en appuyant sur le bouton "supprimer" le correspondant

obtenir les détail (nom, cuisine, ville) d'un restaurant en appuyant sur le lien "detail" le correspondant

**RestaurantDetail**
Qui presente les détails d'un restaurant lorsqu'on appui sur le lien "detail" le correspondant

j'ai implémenté la navigation entre ces différents composants en utilisant vue-router (installation et importation)

créant dans le fichier JS principale, l'objet "route"  un tableau de chemein vers ces differents composants

j'ai pu afficher les composants grace à "router-link" dans le composant "App"
