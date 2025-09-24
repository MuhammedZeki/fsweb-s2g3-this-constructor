// Aşağıdaki görevleri tamamla

/*
  GÖREV 1
    - `Kisi` adında bir Constructor'ı oluştur, 'isim ve 'yas' argümanları alsın.
    - Tüm `Kisi` örnekleri boş bir `mide` dizisi ile yüklensin.
    - `Kisi` örneklerine `.ye("birYemek")` yeteneği ekle:
        + `.ye()` parametre olarak bir string alır, bu parametre bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Eğer, `mide` dizisinde 10 eleman varsa `.ye()` metodu çalışmamalı.
    - Sonra, `Kisi` örneklerine `.bosalt()` yeteneği de ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - `Kisi` örneklerine `.toString()` metodu ekleyin:
        + Bu metotla, `isim` ve `yas`i içeren bir stringe döndürmelisin. (Örn: "Mary, 50")
*/

function Kisi(isim,yas) {
  const kisi={
    _isim:isim,
    _yas:yas,
    _mide:[],
    ye:function(str){
      if(this._mide.length < 10){
        this._mide.push(str)
        return `${this._isim} ${str} yemek yedi`;
      }else{
        return `${this._isim} daha fazla yiyemez`;
      }
    },
    bosalt:function(){
      this._mide=[]
      return `Mide boşaltıldı!`;
    },
    toString:function(){
      return `${this._isim}, ${this._yas}`
    }
  }
  return kisi
}

// const muhammed = Kisi("Muhammed",23)
// muhammed.ye("Elma")
// muhammed.ye("Muz")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// muhammed.ye("Armut")
// console.log(muhammed._mide)
// console.log(muhammed.toString())



/*
  GÖREV 2
    - `Araba` adında bir Constructor oluştur ve parametre olarak `model` ve `yakitTuketimi` kullan.
    - Tüm `Araba` örneklerinin:
        + `benzinDeposu` 0 olarak yüklenir
        + `kilometreSaati`i de 0 olarak yüklen,r
    - `Araba`ların `.doldur(litre)` metoduyla benzinliğe gidip `benzinDeposu` doldurmasını sağla.
      + Bu metot, 'litre' parametresiyle yüklenen yakıt miktarını alır.
      + girilen `litre`yi de `benzinDeposu`na ekler.
    - BONUS: `Araba`lara `.kullan(mesafe)` özelliği de ekleyin. `mesafe`:
        + `kilometreSaati`nin artmasına neden olmalı.
        + `yakitTuketimi` de hesaba katılarak `yakitposuın` azalmasını sağlamalıdır.
    - BONUS: Bir `araba`nın benzini biterse, `kullan` metodu aşağıdaki mesajı paylaşır:
        +  "x kilometrede benzinim bitti!" x değişkeni `kilometreSaati`ndeki sayı olmalıdır.
*/

function Araba(model,yakitTuketimi) {
const araba = {
    _model: model,
    _yakitTuketimi: yakitTuketimi,
    _benzinDepo: 0,
    _kmSaati: 0,

    doldur: function(litre) {
      this._benzinDepo += litre;
      console.log(`${this._model} ${litre} litre benzin aldı. Depodaki benzin: ${this._benzinDepo} litre.`);
    },

    kullan: function(mesafe) {
      const harcananBenzin = mesafe * this._yakitTuketimi;
      
      if (this._benzinDepo >= harcananBenzin) {
        this._benzinDepo -= harcananBenzin;
        this._kmSaati += mesafe;
        console.log(`${this._model} ${mesafe} km yol kat etti. Kalan benzin: ${this._benzinDepo} litre.`);
      } else {
        const gidilenMesafe = this._benzinDepo / this._yakitTuketimi;
        this._kmSaati += gidilenMesafe;
        this._benzinDepo = 0;
        console.log(`${this._model} ${this._kmSaati} kilometrede benzinim bitti!`);
      }
    },
  };
  return araba
}

const bmw = new Araba("BMW 3.20", 0.1); // 1 km'de 0.1 litre yakar

console.log(bmw);

bmw.doldur(30);
bmw.doldur(30);
console.log(bmw._benzinDepo); 
bmw.kullan(300)
bmw.kullan(300)
bmw.kullan(300)
bmw.kullan(300)
console.log(bmw);



/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
    Kisi,
    Araba
/*'Bebek'*/
}
