const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}))

app.get('/work', (req, res) => {
    return res.send({
        data:[
            {
                id: 333,
                creatorId: 220,
                type: "documentary",
                title: "Carolina",
                contentText: "A young woman escapes her wildly eccentric family in search for a life of normalcy.",
                author: "Marleen Gorris",
                authorGender: null,
                authorRace: null,
                link: null,
                publicationYear: "2003-07-04T00:00:00.000Z",
                countryOfOrigin: "",
                countryOfOrigin2: null,
                length: "97",
                createdAt: "2023-04-20T19:24:59.182Z",
                updatedAt: "2023-04-27T17:51:50.728Z",
                tags: "",
                topics: "",
                ToCheck: false,
                localImages: [
                {
                storedFile: "a9/a96260559dcafc2a710786ba40374aac636f27457ca88bbba4da3a4351b5cd77.webp"
                }
                ],
                favs: [ ],
                ratings: [ ],
                readOrWatchedWorks: [ ],
                posts: [ ],
                _count: {
                ratings: 0
                }
            },
            {
                id: 332,
                creatorId: 2,
                type: "fiction-book",
                title: "El cuento de la criada",
                contentText: "El libro de cabecera de una nueva generación. Amparándose en la coartada del terrorismo islámico, unos políticos teócratas se hacen con el poder y, como primera medida, suprimen la libertad de prensa y los derechos de las mujeres. Esta trama, inquietante y oscura, que bien podría encontrarse en cualquier obra actual, pertenece en realidad a esta novela escrita por Margaret Atwood a principios de los ochenta, en la que la afamada autora canadiense anticipó con llamativa premonición una amenaza latente en el mundo de hoy. En la República de Gilead, el cuerpo de Defred sólo sirve para procrear, tal como imponen las férreas normas establecidas por la dictadura puritana que domina el país. Si Defred se rebela -o si, aceptando colaborar a regañadientes, no es capaz de concebir- le espera la muerte en ejecución pública o el destierro a unas Colonias en las que sucumbirá a la polución de los residuos tóxicos. Así, el régimen controla con mano de hierro hasta los más ínfimos detalles de la vida de las mujeres: su alimentación, su indumentaria, incluso su actividad sexual. Pero nadie, ni siquiera un gobierno despótico parapetado tras el supuesto mandato de un dios todopoderoso, puede gobernar el pensamiento de una persona. Y mucho menos su deseo. Los peligros inherentes a mezclar religión y política; el empeño de todo poder absoluto en someter a las mujeres como paso conducente a sojuzgar a toda la población; la fuerza incontenible del deseo como elemento transgresor: son tan sólo una muestra de los temas que aborda este relato desgarrador, aderezado con el sutil sarcasmo que constituye la seña de identidad de Margaret Atwood. Una escritora universal que, con el paso del tiempo, no deja de asombrarnos con la lucidez de sus ideas y la potencia de su prosa. Reseñas: «Merece un lugar de honor en el reducido estante reservado a las obras de literatura anticipatoria que han conseguido formar parte del folclore moderno. Un lugar cercano, y en ningún caso inferior, al de Un mundo feliz y 1984.» Publishers Weekly «Una novela que ilumina con brillantez algunas de las más oscuras conexiones entre política y sexo. [...] Satisfactoria, inquietante y fascinante.» The Washington Post «Esta novela visionaria, en la que Dios y el gobierno se funden y Estados Unidos se convierte en una teocracia puritana, puede leerse como un volumen gemelo de 1984 de Orwell; de hecho, como su reverso.» E. L. Doctorow «Una historia de anticipación fascinante, maravillosamente escrita, inquietante.» Toronto Sun «De una narración ensombrecida por el terror surgen percepciones deslumbrantes, imágenes de brillante intensidad y sarcástico ingenio.» The Independent",
                author: "Margaret Atwood",
                authorGender: "female",
                authorRace: "white",
                link: null,
                publicationYear: "2017-04-27T00:00:00.000Z",
                countryOfOrigin: "canada",
                countryOfOrigin2: null,
                length: "416",
                createdAt: "2023-04-18T12:46:17.492Z",
                updatedAt: "2023-04-18T12:46:17.492Z",
                tags: "",
                topics: "",
                ToCheck: true,
                localImages: [
                {
                storedFile: "0e/0e4a46368695c063b1da8659eb6218ef4e71f99a4a6df2d4a653ffaf952e5632.webp"
                }
                ],
                favs: [ ],
                ratings: [ ],
                readOrWatchedWorks: [ ],
                posts: [ ],
                _count: {
                ratings: 0
                }
            }
        ]
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})