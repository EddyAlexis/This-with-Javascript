const websterIt = {
    cours: "javascript",
    email: "webster@gmail.com",
    etudiant: [],

    login(nom, prenom){
        console.log(`${nom} ${prenom} you are in ${this.cours}
        your email is ${this.email}`)
        this.etudiant.push(`${nom} ${prenom}`)

    }
}

websterIt.login("webster", "fever")
console.log(websterIt.etudiant)