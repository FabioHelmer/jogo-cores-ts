let corSolucao: string;

let coresRandom: Array<string> = [];

let vidas:number = 4 

let cores: Array<string> = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

let verificaOrdemAlfabetica = (arr: Array<string>, corSolucao:string, escolha:string|null ):string | null => {
    let idx_cor = arr.indexOf(corSolucao)
    
    if(escolha === null){
        return null
    }

    let idx_escolha = arr.indexOf(escolha)

    if(idx_cor == -1 || idx_escolha == -1){
        return null
    }else{
        if(idx_cor > idx_escolha){
             return "inferior"
        }else{
            return "superior"
        }
    }
    
}

for(let i = 0; i < 10; i++){
    let idx = Math.floor(Math.random() * (cores.length+1));
    coresRandom.push(cores[idx]);
}
coresRandom = coresRandom.sort()

let idx = Math.floor(Math.random() * 11);
corSolucao = coresRandom[idx]

let disponiveis = "| "
for(let cor of coresRandom){
    disponiveis += cor+" | "
}

do{
   var escolha = prompt(disponiveis+"\n\nQual é a cor que estou pensando?\nVidas:"+vidas);
    
    if(corSolucao.toLowerCase() !== escolha?.toLowerCase())
        vidas--;
        if(vidas > 0 && corSolucao.toLowerCase() !== escolha?.toLowerCase()){
            let ordem = verificaOrdemAlfabetica(coresRandom,corSolucao,escolha)
            if(ordem != null){
                alert(`Não foi dessa vez!\nDica: sua cor é alfabeticamente ${ordem} à minha.\nTente novamente :)`)
            }else{
                alert(`Não foi dessa vez!\nDica: sua cor não é valida. \nselecione uma cor dentre as opções\nTente novamente :)`)
            }
        }

}while(corSolucao.toLowerCase() !== escolha?.toLowerCase() && vidas > 0)

if(vidas>0){
    const element = document.getElementById("container")
    if(element){
        element.style.backgroundColor = corSolucao;
        element.textContent = "Parabéns, você venceu!!! \nrecarregue seu navegador e vamos jogar novamente!!!"
    }

    
}else{
    alert(`Que pena, não foi dessa vez.\nA cor era: ${corSolucao}\n\nnão fique triste, recarregue seu navegador e tente novamente!!`)
}

