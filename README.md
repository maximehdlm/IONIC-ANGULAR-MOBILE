Application qui recense les 250 meilleurs films de l'histoire avec possiblité d'aceder au detail de chaque films

Recherche  des acteurs par leurs noms et prenom, ils disposent eux aussi d'un bouton detail,
cependant je n'ai pas réussi à afficher la liste des films sur le component html, seulement en console.log.

Au final la structure de cette application se decompose ainsi:
-Une page Home
-Une page Movies avec son propre service et son model(interface movie)
-Une page Actors avec son propre service et son model(interface actor)
 
-Un component detail dans Movies
-UN component actor-detail dans Actors

Toutes les requetes des 2 services communiquent avec l'API IMDB

Une image de fond a été implantée dans le fichier global scss


Ce que j'ai appris sur angular et ionic:

-pipe me sert à effectuer un formatage de données pour pouvoir les traiter, et les modifié en appliquant par exemple un philtre
-map sert justement à traiter les données quand on utilise pipe
-La relation observable et les observer, un observer souscrit a un observable pour effectuer des requetes
-Ionic se base sur angular et permet le developpement sur mobile
-Le google auth pour l'autentification avec token
-behaviorsubject retourne une valeur initiale au observer



