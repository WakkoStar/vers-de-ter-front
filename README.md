# Tuto verts de ter

## Connexion 

Se connecter à l'adresse suivante avec les indentifiants
https://admin.lesvertsdeter.fr/dashboard/auth/login

## Dashboard : contenu

Une fois connecté, vous arrivez sur la page d'accueil du dashboard ( page de contrôle ). 
Sur la gauche, se trouve une barre de navigation avec le contenu suivant : 

#### COLLECTION TYPES 
- Categories
- Posts
- Rubriques
- Utilisateurs

#### PLUGINS
- Content Types Builder
- Media Library
- Rôles et autorisations

#### GÉNÉRAL
- Marketplaces
- Plugins
- Paramètres

Intéressons nous uniquement aux collection types qui comporte :
- Catégories
- Posts
- Rubrique

### Les catégories

> Avant quoi que ce soit, il faut faire la différence entre le **dashboard** ( ici : admin.lesvertsdeter.fr ) qui permet de modifier le contenu sur le **site public** ( ici : lesvertsdeter.fr ). Autrement dit, avec le dashboard on contrôle; avec le site public on voit. Ce sont 2 entités différentes.

#### Description
Les catégories sur le site public sont les principaux titres dans la barre de navigation en orange ( exemple : Manger, Bouger, Cheminots ). On peut les illustrer comme des boîtes. Leurs utilité est de contenir. 

#### Propriétés
Les catégories sont composés d'un **nom** ainsi que d'une **position**. La position est visible sur le site public. La catégorie la plus à gauche est première, la catégorie la  à droite est dernière.


### Les rubriques

#### Description
Les rubriques sont aussi des "boîtes". Elles sont visibles dans le site public dans une liste, lorsque qu'on passe sur une catégorie avec la souris ( PC uniquement ). Pour l'instant nous avons les catégories qui sont des boîtes, qui contiennent des rubriques.

#### Propriétés
Les rubriques sont composés d'un **nom**, d'un accès **cheminots**. Si il est activé, alors la rubrique cible n'est visible que par les cheminots et d'une **catégorie**, pour savoir à quelle catégorie la rubrique appartient.


### Les posts

#### Description
Les posts sont les articles visibles sur le site public. Par exemple, dans les dernières actus du site. Ils sont rattachés à une rubrique. Pour faire un récapitulatif. Nous avons une boîte catégorie. Elle contient des autres boites rubriques. Et celles ci contiennent des posts.

#### Propriétés
Un article est composé d'un titre, d'une description, une gallerie d'image et de la rubrique dont elle est rattaché

### Media Gallery 
Cette section contient  toutes les images que vous utilisez sur le site.

## Dashboard : utilisation

Bien nous avons tout le contenu, voyons comment utiliser l'application. 
Veuillez cliquer sur **Categories** de **COLLECTION TYPES** dans la barre de navigation

### Ajouter du contenu

![un texte alternatif ici](https://admin.lesvertsdeter.fr/uploads/addcategory_3dc5b2bd2c.png)

Prenons donc les catégories comme exemple. Pour ajouter une catégorie, un bouton bleu **AJOUTER UNE CATEGORY**  se trouve en haut, à droite;
Vous vous retrouver sur une interface de création, choisissez un titre, une position. vous pouvez même choisir les rubriques dans la catégorie, tout à droite de l'écran.

Faites de même en créant ensuite une rubrique :
- **Nom** fait un nom SIMPLE (c'est a dire éviter les caractères du style */:"°!§;, et j'en passe, tu mets UN MOT et basta )
- **Cheminots** détermine si les posts sur cette rubrique ne sont disponible que pour les cheminots.
- **Category** permet de sélectionner la catégorie à attribuer. N'oubliez pas de le faire sinon la rubrique ne sera pas affiché sur le site !
> **/!\ /!\ Si la rubrique est accessible pour tout le monde veuillez sélectionner "cheminots ON" puis "cheminots OFF" pour que la valeur soit bien mise, sinon tout les articles de la rubriques seront INVISIBLE sur le site**

Enfin, créez un post / article :
- **Titre** de l'article
- **Description** autrement dit le contenu quoi
- **Gallerie** est le diaporama d'images en début d'article ( une image au moins est obligatoire )
- **Rubriques** est la rubrique accroché au poste, ne l'oubliez pas sinon le poste est invisible sur le site !


### Modifier le contenu

![un texte alternatif ici](https://admin.lesvertsdeter.fr/uploads/modifycategory_025a43ff3f.png)

Chaque contenu dispose d'un droit de modification, la suppression se trouve juste à coté.

### Rendre mon contenu invisible

Pour une catégorie, il faut la supprimer ( cela ne supprimera rien d'autre ).

Pour une rubrique, laisser le champ **Category** vide.

Pour un post, laisser le champ **Rubriques** vide.


## Dashboard : Créer un post

### - Titres

![un texte alternatif ici](https://admin.lesvertsdeter.fr/uploads/titres_143190deb8.png)

Les titres vont jusqu'à 3 hashtags ( je n'ai pas fait plus bas ). Pensez bien à séparer les hashtags et le texte d'un espace. Il est conesillé d'appuyer sur prévisualisation pour voir si l'article correspond à ce que vous faites.

### - Paragraphe

![un texte alternatif ici](https://admin.lesvertsdeter.fr/uploads/paragraph_00a13b28ab.png)

- Le gras se fait avec deux astérisques.
- Les liens : entre crochets se trouve un texte qui sera cliquable sur l'article. Entre parenthèses c'est le lien.
- Les listes se font avec des tirets
- Une citation se fait avec le signe supérieur

### - Images

![un texte alternatif ici](https://admin.lesvertsdeter.fr/uploads/images_3b080cd118.png)

Les images s'intègrent de la même manière qu'un lien. Un texte alternatif entre crochets (si par exemple l'image ne se charge pas) et entre parenthèses le lien du fichier.
Soit vous ajoutez une image de la gallerie et il faut ajouter **"https://admin.lesvertsdeter.fr"** devant **"/uploads"** soit vous pouvez la prendre directement d'un site.
Pensez à sauter une ligne entre le texte et l'image pour un meilleur résultat

### - Détails

Le système d'écriture est du markdown, tout est dit sur internet si vous voulez plus d'infos.
Les éléments sont disponibles depuis la barre d'outils.
Ajouter,  modifier et suprimer se font toujours de la même manière. Pour rendre invisible un post , laisser le champ **Rubrique** vide.

Je t'ai laissé des articles d'exemples pour tu puisses te familariser avec le markdown. Je te conseille de les garder en invisible tout de même.


# Voila !
Garde ce document dans un coin !
Ah oui les images que tu vois ici sont en fait hebergés sur ton dashboard donc ne les supprime pas s'il te plait...

