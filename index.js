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

function Araba() {
  
}

/*
  GÖREV 3
  Kendi cümlelerinle "this" kelimesinin 4 prensibini açıklayın:
  1.
  2.
  3.
  4.
*/


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
