# eugenio
musical repo
\we have loaded _eugenio.yml  from Upload option change

lorsque c’est votre navigateur qui envoie les requêtes au serveur de ressources via Javascript le framework OAuth2
ne peut pas toujours garantir les sécurit.
Le scope est un paramètre qui sert à limiter les droits du token d’accès. C’est le serveur d’autorisation qui définit la liste des scopes disponibles. Le client doit alors envoyer le ou les scopes qu’ils souhaitent utiliser lors de la demande d’autorisation. Plus le scope est réduit, plus on a de chance que le détenteur des données autorise l’accès.
utilisation de HTTPS pour les échanges entre le client et le serveur d’autorisation
----
Utilisation du token d’accès
Le token d’accès peut être envoyé de plusieurs façons au serveur de ressources.

Paramètre de la requête (GET ou POST)

Exemple avec GET : https://api.example.com/profile?access_token=MzJmNDc3M2VjMmQzN

Cela n’est pas idéal car le token peut se retrouver dans les logs d’accès du serveur web.

Header Authorization

GET /profile HTTP/1.1
Host: api.example.com
Authorization: Bearer MzJmNDc3M2VjMmQzN

C’est pratique et élégant mais tous les serveurs de ressources ne le permettent pas.

________________________________________

exemple d'urI avec ID OAuth2 App Token 

https://github.com/settings/connections/applications/:client_id
