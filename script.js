window.history.pushState(null, '', location.href);
window.onpopstate = function () {
    window.history.pushState(null, '', location.href);
    if (selectedProducts.length > 0) {
        showModal(warningModal);
    }
};

const products = [
    { id: 1, name: 'ACEITE AGROIL 828 ML "480bultos"' },
    { id: 2, name: 'ACEITE DE GIRASOL 1 LITRO "50bultos"' },
    { id: 3, name: 'ACEITE DE OLIVA CAPRI 250 ML X 12 UND "15bultos"' },
    { id: 4, name: 'ACEITE DE OLIVA CAPRI DE 500ML".' },
    { id: 5, name: 'ACEITE MAZEITE 1 LITRO "80bultos".' },
    { id: 6, name: 'ACEITE NATUROIL 850 ML "50bultos"' },
    { id: 7, name: 'ACEITE PORTUMESA "65bultos"' },
    { id: 8, name: 'ACEITE VATEL SOYA 1 LITRO "85bultos"' },
    { id: 9, name: 'ACEITE VATEL SOYA 1/2 LITRO "30bultos"' },
    { id: 10, name: 'ACEITUNA ENTERA GIRALDA 500 GR "05bultos"' },
    { id: 11, name: 'ACEITUNAS ENTERAS GIRALDA 200 GR "06bultos"' },
    { id: 12, name: 'ACEITUNAS RELLENAS GIRALDA/200 GR "06bultos"' },
    { id: 13, name: 'ADOB /MELBUEN 200 GR "09bultos"' },
    { id: 14, name: 'AFRECHO 500 GR "07bultos"' },
    { id: 15, name: 'ALCAPARRAS GIRALDA ".' },
    { id: 16, name: 'ALINOS CURCUMA "06bultos"' },
    { id: 17, name: 'ALIÃ‘O SAN MIGUEL GRAND "03bultos"' },
    { id: 18, name: 'ALIÃ‘O SAN MIGUEL PQ "11bultos"' },
    { id: 19, name: 'â€¢ALUMINIO ROLLO "270UND"' },
    { id: 20, name: 'ARROZ CONQUISTA 900 GR "52bultos"' },
    { id: 21, name: 'ARROZ DOÃ‘A EMIIA 900 GMS".' },
    { id: 22, name: 'ARROZ MARY TRADICIONAL 900 GR ""' },
    { id: 23, name: 'ARROZ MASIA 900 GR "430bultos"' },
    { id: 24, name: 'ARROZ PRIMOR 900G CLASICO "110bultos".' },
    { id: 25, name: 'ARROZ PRIMOR ROJO TRADICIONAL 900 GR "".' },
    { id: 26, name: 'ATUN DIPLOMATICO AZUL 170 GR "185bultos"' },
    { id: 27, name: 'ATUN MARGARITA AZUL NATURAL 140 GR "".' },
    { id: 28, name: 'ATUN MARGARITA ROJO ACEITE 140 G "15bultos".' },
    { id: 29, name: 'ATUN PACIFICO 170 GRM ".' },
    { id: 30, name: 'ATUN PEÃ‘ERO 170 GR VERDE "170bultos".' },
    { id: 31, name: 'AVENA 8 DE MARZO 400 GR "10bultos"' },
    { id: 32, name: 'AVENA DEVITA 400 GR "90bultos"' },
    { id: 33, name: 'AVENA DON JORGE/ 400 GR "25bultos".' },
    { id: 34, name: 'AVENA QUAKER 400 GR "07bultos".' },
    { id: 35, name: 'AZUCAR MORENA MONTALBAN 1KG ""' },
    { id: 36, name: 'AZUCAR NEGRA 1 KG "20bultos".' },
    { id: 37, name: 'AZUCAR PASTORA "650bultos" ' },
    { id: 38, name: 'BALON DE FUTBOL "12UND" ' },
    { id: 39, name: 'BOMBILLOS AMARILLO "02bultos"' },
    { id: 40, name: 'BOMBILLOS LED 15WAT "4bultos"' },
    { id: 41, name: 'â€¢BROTES SANARE "135UND"' },
    { id: 42, name: 'â€¢CACHITO *20 TODOS "600UND"' },
    { id: 43, name: 'CAFÃ‰ CORDILLERA 200 GR "80bultos"' },
    { id: 44, name: 'CAFÃ‰ CORDILLERA 500 GR "70bultos"' },
    { id: 45, name: 'â€¢CAFÃ‰ EN GRANO 250 GR *40 COROMOTANA "02bultos"' },
    { id: 46, name: 'â€¢CAFÃ‰ EN GRANOS DULCE AMARGO 400GR "04bultos"' },
    { id: 47, name: 'â€¢CAFÃ‰ FRONTINO DE 400 GR "04bultos"' },
    { id: 48, name: 'CAFÃ‰ LO NUESTRO "35bultos"' },
    { id: 49, name: 'CAFÃ‰ MATILDE "22bultos"' },
    { id: 50, name: 'CAFÃ‰ VARYNA ALUMINIO "08bultos"' },
    { id: 51, name: 'CARAOTA MAIZAL400 GR "105bultos"' },
    { id: 52, name: 'CARAOTA PESADA NEGRAS/ROJAS 500 GR "2600kg"' },
    { id: 53, name: 'CARAOTAS D"VITA 400 GR "17bultos"' },
    { id: 54, name: 'CARNE DE SOYA SOY TEX 200 GR "06bultos"' },
    { id: 55, name: 'â€¢CATALINAS "185UND"' },
    { id: 56, name: 'â€¢CATALINAS/BLANCA *10 "120UND"' },
    { id: 57, name: 'CEPILLO DE BARRER "15cajas"' },
    { id: 58, name: 'CEPILLO DENTAL COLGATE "03cajas"' },
    { id: 59, name: 'CERA TULIPAN 1/2 LT BLANCA "03cajas"' },
    { id: 60, name: 'CERA TULIPAN 1LT BLANCA "06bultos"' },
    { id: 61, name: 'CERA TULIPAN DE 1 LT COLOR /COLOR "02cajas"' },
    { id: 62, name: 'CERA TULIPAN DE 1/2 LT COLOR/COLOR "02cajas"' },
    { id: 63, name: 'CERELAC BOLSA 400 GR "02cajas"' },
    { id: 64, name: 'CHOCO PILO 220 GR "07cajas"' },
    { id: 65, name: 'CHOCOLATE ARTESANAL 200 GR "01bultos"' },
    { id: 66, name: 'CHOCOLATE TERRY 200GR X24 "11bultos"' },
    { id: 67, name: 'CHUPETAS "1caja"' },
    { id: 68, name: 'CLORO ENMANUEL 1 LITRO "14bultos"' },
    { id: 69, name: 'CLORO TAPA AMARILLA1 LITRO "20bultos"' },
    { id: 70, name: 'â€¢COCADAS "130UND"' },
    { id: 71, name: 'COMPOTA HEINZ MANZANA 186 GR "10bultos"' },
    { id: 72, name: 'COMPOTA HEINZ PERA 186 GR "11bultos"' },
    { id: 73, name: 'COMPOTA NATULAC MANZANA 186 GR "12bultos"' },
    { id: 74, name: 'COMPOTA NATULAC PERA 186 GR "11bultos"' },
    { id: 75, name: 'COMPOTA POLLY DE 113 MANZANA GR "02bultos"' },
    { id: 76, name: 'COMPOTA POLLY DE 113 PERA GR "02bultos".' },
    { id: 77, name: 'CREMA ARROZ MARY 450 GR "04bultos"' },
    { id: 78, name: 'CREMA ARROZ PRIMOR 450 GR "02bultos".' },
    { id: 79, name: 'CREMA COLG/TRIP PLAX 60 GR "10cajas"' },
    { id: 80, name: 'CREMA COLGATE KIDS 50 GM GRM".' },
    { id: 81, name: 'CREMA COLGATE NORMAL 90 GR "05cajas"' },
    { id: 82, name: 'CREMA GALACTIC 75 GR "22cajas"' },
    { id: 83, name: 'CREMA MAKSIN 135 GR ROJA "07cajas"' },
    { id: 84, name: 'CUBITO MAGGI "05cajas"' },
    { id: 85, name: 'DESODORANTE EVERY NIGHT "16cajas"' },
    { id: 86, name: 'DESODORANTE LEIDY SPEED STICK SOBRE "13UND"' },
    { id: 87, name: 'DESODORANTE LEIDY TUBO  30 GR "12cajas"' },
    { id: 88, name: 'DIABLITO /PLUMROSE "23cajas"' },
    { id: 89, name: 'DIABLITO UNDERWOOD 54 GR "22cajas"' },
    { id: 90, name: 'DULCE MONCAR TODOS ""' },
    { id: 91, name: 'ENCURTIDOS EUREKA 500 GR "13UND"' },
    { id: 92, name: 'ESPONJAS MAX HOGAR "02bultos"' },
    { id: 93, name: 'FIDEO CAPRI 250 GR "13bultos"' },
    { id: 94, name: 'FLOR DE JAMAICA "55UND"' },
    { id: 95, name: 'FORORO MELBUEN "05bultos "' },
    { id: 96, name: 'FORORO VALLE HOND 400 GR "19bultos".' },
    { id: 97, name: 'FOSFORO UNIDAD "150UND"' },
    { id: 98, name: 'FRIJOL PICO NEGRO MAIZALITO*30 ".' },
    { id: 99, name: 'FRUTO SECO MELBUEN ""' },
    { id: 100, name: 'â€¢GALLETA ARTESANAL "130UND"' },
    { id: 101, name: 'GALLETA CALEDONIA /250 GR "23UND"' },
    { id: 102, name: 'GALLETA CHARMY 216 GR "23bultos"' },
    { id: 103, name: 'GALLETA CLUB SOCIAL "20cajas"' },
    { id: 104, name: 'GALLETA DUCALES 105 GR "02cajas"' },
    { id: 105, name: 'GALLETA KRAKER/ HONNY BRAN "16cajas"' },
    { id: 106, name: 'GALLETA MARIA ITALIA "100bultos"' },
    { id: 107, name: 'GALLETA MARIASELECTA PUIG "18cajas"' },
    { id: 108, name: 'GALLETA OREO 1 TUBO "11cajas"' },
    { id: 109, name: 'GALLETA SODA CARABOBO "33cajas"' },
    { id: 110, name: 'GALLETA SODA PUIG SOL "20cajas"' },
    { id: 111, name: 'GALLETA TIP TOP 80 GR "12cajas"' },
    { id: 112, name: 'GATARINA GATSY 20 KG ""' },
    { id: 113, name: 'GEL ANTIVACTERIAL 500 ML ""' },
    { id: 114, name: 'GEL MENTOLADO AVIVIR 250 GR ""' },
    { id: 115, name: 'GELATINA EVERY NIGHT 250 GR "05bultos"' },
    { id: 116, name: 'GELATINA GELLA 90 GR "03bultos"' },
    { id: 117, name: 'GELATINA GOLDEN "".' },
    { id: 118, name: 'GELATINA SONRISA 66 GR "04cajas"' },
    { id: 119, name: 'GRANOLA 8 DE MARZO ""' },
    { id: 120, name: 'GUISANTES TIGO 300 GR "03cajas"' },
    { id: 121, name: 'HARINA ARAURIGUA 1 KILO "1050bultos"' },
    { id: 122, name: 'HARINA DE AVENA QUAKER 400 GR "04bultos".' },
    { id: 123, name: 'HARINA DE TRIGO MARY 900 GR "55bultos"' },
    { id: 124, name: 'HARINA DOÃ‘A EMILIA 1 KILO "365bultos"' },
    { id: 125, name: 'HARINA KALY PREMIUN ( NUEVA )"110bultos"' },
    { id: 126, name: 'HARINA MASIAS 900 GMS ".' },
    { id: 127, name: 'HARINA P.A.N AMARILLA "".' },
    { id: 128, name: 'HARINA P.A.N MEZCLA 1 KILO "120bultos".' },
    { id: 129, name: 'HARINA P.A.N NORMAL "700bultos".' },
    { id: 130, name: 'HARINA TRIGO ESPECIAL LEUD 900 GR "150bultos"' },
    { id: 131, name: 'HARINA TRIGO ESPECIAL TODO USO 900 GR "52bultos"' },
    { id: 132, name: 'HUEVOS 1/2 CARTON "290cajas".' },
    { id: 133, name: 'JABON ACE 400 GR *18 "07bultos".' },
    { id: 134, name: 'JABON ALIVE 1 KILO GR "100bultos"' },
    { id: 135, name: 'JABON ALIVE 500 GR "78bultos"' },
    { id: 136, name: 'JABON DALAN 125 GR "26cajas"' },
    { id: 137, name: 'JABON EVERY NIGHT 110 GR "11cajas"' },
    { id: 138, name: 'JABON FRESCA FRAGANCIA 160 GR "18cajas".' },
    { id: 139, name: 'JABON LIQUIDO TULIPAN 1 LITRO "03cajas"' },
    { id: 140, name: 'JABON MULTI CLEAN CITRICO 400GMS "25bultos".' },
    { id: 141, name: 'JABON MULTI CLEAN FLORAL 400GMS "20bultos".' },
    { id: 142, name: 'JABON PALMOLIVE 85 GR "13cajas".' },
    { id: 143, name: 'JABON PANELA EXTRA LIMP 250 GR "25/30cajas".' },
    { id: 144, name: 'JABON POLVO LLAVES BEBE 400 GR "22bultos".' },
    { id: 145, name: 'JABON POLVO LLAVES LIMON 400 GR "".' },
    { id: 146, name: 'JABON POLVO LLAVES TRADIOCIONL 400 GR "".' },
    { id: 147, name: 'JABON PROTEX 110 GR "14cajas"' },
    { id: 148, name: 'JABON REXONA 110 GR "10cajas"' },
    { id: 149, name: 'JUGO DEL MONTES 200ML "07cajas".' },
    { id: 150, name: 'JUGO EL TUNAL DE 1 LITRO DURAZNO "01caja".' },
    { id: 151, name: 'JUGO EL TUNAL DE 1 LITRO MANZANA "06cajas".' },
    { id: 152, name: 'JUGO EL TUNAL DE 1 LITRO PERA "06cajas".' },
    { id: 153, name: 'JUGO EL TUNAL DE 1 LITRO PIÃ‘A "01caja".' },
    { id: 154, name: 'JUGO KONGA SABOR DE LIMON 30 GR "56UND".' },
    { id: 155, name: 'JUGO NARANJA TUNAL 200ML "13cajas".' },
    { id: 156, name: 'JUGO NATULAC MANZANA 250 ML*24 "55cajas"' },
    { id: 157, name: 'JUGO NATULAC PERA 250 ML*24".' },
    { id: 158, name: 'JUGO YUSTY 1/5 ML "50bultos".' },
    { id: 159, name: 'LACTOVISOY COLONA 500GR "02bultos"' },
    { id: 160, name: 'LAVA LAVA CHARMYS 1 LITRO "05cajas"' },
    { id: 161, name: 'LAVAP AXION 225 GR "08cajas"' },
    { id: 162, name: 'LAVAP LAS LLAVES LIQ 500 CC "03cajas".' },
    { id: 163, name: 'LAVAPLATO ALMESSY 450 GR "02cajas"' },
    { id: 164, name: 'LAVAPLATO LAS LLAVES CREMA 250 "01caja".' },
    { id: 165, name: 'LECHE CAMPIÃ‘A DE 400 GR "40bultos"' },
    { id: 166, name: 'LECHE CONDENSADA MAITA "25cajas"' },
    { id: 167, name: 'LECHE CONDENSADA NATULAC 380 ML "08cajas"' },
    { id: 168, name: 'LECHE DESLACTOSADA TUNAL 1 LT "12cajas".' },
    { id: 169, name: 'LECHE LIQUIDA SAN SIMON 1 LT "35cajas"' },
    { id: 170, name: 'LECHE MONTAÃ‘A FRESCA 400 GR "90bultos"' },
    { id: 171, name: 'LECHE PURISIMA COMPLETA 1 LITRO "65bultos".' },
    { id: 172, name: 'LECHE PURISIMA DESCREMADA1 LITRO "45cajas".' },
    { id: 173, name: 'LECHE VALLELAC 375GR "130bultos"' },
    { id: 174, name: 'LENTEJAS DEVITA 400 GR "24bultos"' },
    { id: 175, name: 'LENTEJAS MAIZAL 400/GR "28bultos"' },
    { id: 176, name: 'LENTEJAS PESADA 500 GR "1000kg"' },
    { id: 177, name: 'LIMPIA POCETAS MAS "03cajas"' },
    { id: 178, name: 'LIMPIADOR MAREA CRISTALINA 500 cc "04cajas".' },
    { id: 179, name: 'MAIZ DE COTUFA DVITA 400 GR "09bultos"' },
    { id: 180, name: 'MAIZ DE COTUFA MAIZAL 400 GR "25bultos"' },
    { id: 181, name: 'MAIZ DULCE PAFIA "06cajas "' },
    { id: 182, name: 'MAIZINA AMERICANA 200 GR "04caja"' },
    { id: 183, name: 'MAIZOR AZUCARADOS 240 GR "14cajas"' },
    { id: 184, name: 'MAIZOR BOLSA NORMAL300 "22cajas"' },
    { id: 185, name: 'MAIZOR FRUTI AROS 240 GR "14cajas"' },
    { id: 186, name: 'MAIZORITO PLANET FRUIT 240 GR "16cajas"' },
    { id: 187, name: 'MANZANILLA MELBUEN ""' },
    { id: 188, name: 'MARGARINA MAVESA 250 GR "55cajas".' },
    { id: 189, name: 'MARGARINA MAVESA 500 GR "230cajas".' },
    { id: 190, name: 'MARGARINA MIRASOL 454 GR "46cajas"' },
    { id: 191, name: 'MARGARINA NELLY 500GR "30cajas".' },
    { id: 192, name: 'MARGARINA RENDIDORA 400 GR "32cajas"' },
    { id: 193, name: 'MARGARINA VEMESA 400 GR "40cajas"' },
    { id: 194, name: 'MAYONESA ESPECIAL 445 GR "20cajas"' },
    { id: 195, name: 'MAYONESA KEMY "55cajas"' },
    { id: 196, name: 'MAYONESA KRAFT 175 GR "10cajas"' },
    { id: 197, name: 'MAYONESA KRAFT 445 GR "70cajas"' },
    { id: 198, name: 'MAYONESA MAVESA 175 GR "10cajas".' },
    { id: 199, name: 'MAYONESA MAVESA 445 GR "55cajas".' },
    { id: 200, name: 'MAYONESA MAVESA 910 GR "12cajas".' },
    { id: 201, name: 'MAYONESA REAL 445 GR "75cajas".' },
    { id: 202, name: 'MEGA AROS "30bultos"' },
    { id: 203, name: 'MENTOL AVIVIR 30 GRAMOS ""' },
    { id: 204, name: 'MERMELADA NUEVA (ETNA ) 220ML "03cajas"' },
    { id: 205, name: 'MEZCLA CACHAPA PAN "05cajas"' },
    { id: 206, name: 'MEZCLA CACHAPA SEMILLA "07cajas"' },
    { id: 207, name: 'MIEL CAMPO REAL PQ 350 ML ""' },
    { id: 208, name: 'MIEL DE SAN CARLOS 350ML "26UND"' },
    { id: 209, name: 'MIGURD X24 UND 125 GR "".' },
    { id: 210, name: 'â€¢MORTADELA /PUNTA MTE 1 KG "40/45bultos"' },
    { id: 211, name: 'â€¢MORTADELA /PUNTA MTE 1/2 KG "20/25bultos"' },
    { id: 212, name: 'â€¢MORTADELA ALIBAL 1/2KILO "20/25bultos"' },
    { id: 213, name: 'â€¢MORTADELA ALIBAL1 KILO "45/50bultos"' },
    { id: 214, name: 'â€¢MORTADELA ALPRO 400 gr "15/20bultos"' },
    { id: 215, name: 'â€¢MORTADELA ALPRO 900 GR "15/20bultos"' },
    { id: 216, name: 'â€¢MORTADELA ARICHUNA 1 KILO "11cajas"' },
    { id: 217, name: 'â€¢MORTADELA BOLOGÃ‘A 500 GR "10/12bultos"' },
    { id: 218, name: 'MORTADELA CARACAS 900 GR "25/30bultos".' },
    { id: 219, name: 'â€¢MORTADELA PLUMROSE 1 KILO "40/45bultos"' },
    { id: 220, name: 'MOSTAZA EUREKA PLASTICA 285 GR "20/21cajas"' },
    { id: 221, name: 'MULTIUSO TULIPAN 1 LITRO "02cajas"' },
    { id: 222, name: 'MULTIUSO TULIPAN 1/2 LITRO "02cajas"' },
    { id: 223, name: 'â€¢NATILLA GUARALAC "600UND"' },
    { id: 224, name: 'â€¢NATILLA VEGA BOLSA 450 GR "700UND"' },
    { id: 225, name: 'NESTUN BOLSA 225 GR 3 CEREALES "02cajas"' },
    { id: 226, name: 'NUTRIBELLA "02cajas"' },
    { id: 227, name: 'â€¢PAN ARABE "800UND"' },
    { id: 228, name: 'â€¢PAN DE DIOS "150UND"' },
    { id: 229, name: 'â€¢PAN DE GUAYABA "510UND"' },
    { id: 230, name: 'â€¢PAN DE HAMBURGUESA X 08 "100UND"' },
    { id: 231, name: 'â€¢PAN DE PERRO "50UND"' },
    { id: 232, name: 'â€¢PAN DE SANDWICHE AVENA GR "140"' },
    { id: 233, name: 'â€¢PAN DE SANDWICHE EL NACIONAL "100UND"' },
    { id: 234, name: 'â€¢PAN DE SANDWICHE GR "350UND"' },
    { id: 235, name: 'â€¢PAN DE SANDWICHE ZANAHORIA GR140' },
    { id: 236, name: 'â€¢PAN DE TUNJA PEQ "820UND"' },
    { id: 237, name: 'â€¢PAN SANDWICHE PEQ "280UND"' },
    { id: 238, name: 'PANELA DULCE 500 gr CON ETIQUETA "25bultos"' },
    { id: 239, name: 'PAÃ‘ALES BABY FINGER G- XG 10 UND "01bulto"' },
    { id: 240, name: 'PAÃ‘ALES BABY FINGER GD 16 UND ""' },
    { id: 241, name: 'PAÃ‘ALES HUGGUIES * 20 UNID G AZUL "04bulto"' },
    { id: 242, name: 'PAÃ‘ALES HUGGUIES MED "04bultos"' },
    { id: 243, name: 'PAPEL /ROSAL 4 ROLL 215 BLANCO "160bultos"' },
    { id: 244, name: 'PAPEL CARICIAS DE 600HOJAS".' },
    { id: 245, name: 'PAPEL ROSAL 400 HOJAS "105bultos"' },
    { id: 246, name: 'PAPEL ROSAL DE 600 HOJAS "105bultos"' },
    { id: 247, name: 'PASTA CAPRI 1 KILO CORTA AZUL "160bultos"' },
    { id: 248, name: 'PASTA CAPRI 1 KILO LARGA AZUL "200bultos"' },
    { id: 249, name: 'PASTA CORTA 500 GRS "50bultos".' },
    { id: 250, name: 'PASTA ESPECIAL CORTA "400bultos"' },
    { id: 251, name: 'PASTA ESPECIAL LARGA "680bultos"' },
    { id: 252, name: 'PASTA INTEGRAL 8 D MARZO "07bultos"' },
    { id: 253, name: 'PASTA PRIMOR CORTA NEGRA 1KG "07bultos".' },
    { id: 254, name: 'PASTA PRIMOR EXTRA CORTA ROJA 1 KG "03bultos".' },
    { id: 255, name: 'PASTA PRIMOR EXTRA LARGA ROJA 1 KG "03bultos".' },
    { id: 256, name: 'PASTA PRIMOR LARGA NEGRA 1 KG "07bultos".' },
    { id: 257, name: 'PASTA RONCO DE 500 GR "05bultos"' },
    { id: 258, name: 'â€¢PASTELITO DE AREQUIPE "120UND"' },
    { id: 259, name: 'PASTICHO RONCO DE 250 GR "13bultos"' },
    { id: 260, name: 'PEPITO CHEEZ PEK 75 GR "16bultos"' },
    { id: 261, name: 'PEPITO OSTIS 100 GR "15bultos"' },
    { id: 262, name: 'PEPITONA MARGARITA 140 GR "05bultos".' },
    { id: 263, name: 'PERRAR DOGOURMENT ADULTO 1/2 KG""' },
    { id: 264, name: 'PERRAR DOGOURMENT CACHORRO 1/2 KG""' },
    { id: 265, name: 'PERRARINA DOG CHAU 1/2 KILO""' },
    { id: 266, name: 'PERRARINA KANINA 1/2 KG *18""' },
    { id: 267, name: 'PERRARINA PURINA 1/2 KG""' },
    { id: 268, name: 'PERRARINA SUPER CAN CACHORRO 1/2""' },
    { id: 269, name: 'PERRARINA SUPER CAN NORMAL 1/3""' },
    { id: 270, name: 'â€¢PIZZA LA CHEVERISIMA GRND "100UND"' },
    { id: 271, name: 'PRESTOBARBA ALLISON /ALMESSI 3 HOJILLA "400UND"' },
    { id: 272, name: 'PRESTOBARBA DORCO X5 "130UND"' },
    { id: 273, name: 'â€¢PULPAS DE FRUTA "420UND"' },
    { id: 274, name: 'â€¢QUESO 1 KILO "1500/2000"' },
    { id: 275, name: 'QUINCHONCHO 1/2 "167kg"' },
    { id: 276, name: 'REFRESCO GLUP 2 LITROS"20bultos"' },
    { id: 277, name: 'REFRESCO GOLDEN 1/2LTR "40bultos".' },
    { id: 278, name: 'REFRESCO PEPSI 1/2LTR NEGRA "15bultos".' },
    { id: 279, name: 'RIKESA "20bultos"' },
    { id: 280, name: 'â€¢SACOS ECOLOGICO "600UND"' },
    { id: 281, name: 'SAL EN SAL "65bultos"' },
    { id: 282, name: 'SAL ESMERALDA "22bultos"' },
    { id: 283, name: 'SALSA CHINA 150GR "13bultos"' },
    { id: 284, name: 'SALSA CUMBRE 380 GR "45/50bultos"' },
    { id: 285, name: 'SALSA FRITZ PICANTE "3cajas"' },
    { id: 286, name: 'SALSA HEINZ/ 397 GR "30cajas"' },
    { id: 287, name: 'SALSA INGLESA IBERIA 150CC "15bultos"' },
    { id: 288, name: 'SALSA KETCHUP GIRALDA 397 GR "05cajas"' },
    { id: 289, name: 'SALSA MONCAR "2cajas"' },
    { id: 290, name: 'SALSA PAMPERO 397 GR "25cajas".' },
    { id: 291, name: 'SALSA PARA PASTA GIRALDA "05cajas"' },
    { id: 292, name: 'SALSA ROSADA ALBECA 500 GR "02cajas"' },
    { id: 293, name: 'SALSA TIQ FLORES 397 GR "50cajas"' },
    { id: 294, name: 'SALSAS LIQUIDA REY AJO 150 CC "25cajas"' },
    { id: 295, name: 'SALSAS LIQUIDA REY INGLESA 150 CC "10cajas"' },
    { id: 296, name: 'SALSAS LIQUIDA REY SOYA 150 CC "15cajas"' },
    { id: 297, name: 'SALSAS ROSADA ZUYCH/ 240 GR "02cajas"' },
    { id: 298, name: 'SALSAS ZUYCH CHEDDAR "04cajas"' },
    { id: 299, name: 'SALSAS ZUYHC MAIZ ""' },
    { id: 300, name: 'SARD. MARGARITA EN ACEITE 170 GR "20bultos".' },
    { id: 301, name: 'SARD. MARGARITA EN TOMATE 170 GR "20bultos".' },
    { id: 302, name: 'SARD. MARGARITA PICANTE 170 GR "20bultos".' },
    { id: 303, name: 'SARDINA INCOSA ACEITE 170 GR ".' },
    { id: 304, name: 'SARDINA INCOSA TOMATE 170 GR "250bultos"' },
    { id: 305, name: 'SERVILLETA Z PEQUEÃ‘A "45bultos"' },
    { id: 306, name: 'SHAMPO H&SHDE SOBRE "02cajas"' },
    { id: 307, name: 'SHAMPOO HEAD & SHOULDERS DE 180ml "05cajas"' },
    { id: 308, name: 'SHAMPU ALIVE 350 ML "5cajas"' },
    { id: 309, name: 'SHAMPU SAVITAL "07cajas"' },
    { id: 310, name: 'SOPA SOBRE MAGGY "20cajas"' },
    { id: 311, name: 'SOPÃ SOBRE IBERIA "2cajas"' },
    { id: 312, name: 'SUAVISANTE DOWNY "07cajas".' },
    { id: 313, name: 'SUAVISANTE LAS LLAVES"".' },
    { id: 314, name: 'SUAVISANTE TULIPAN 1 LT "01caja"' },
    { id: 315, name: 'SUAVISANTE TULIPAN 1/2 LT "01caja"' },
    { id: 316, name: 'SUAVITEL SOBRE "35cajas"' },
    { id: 317, name: 'â€¢SUERO GUARALAC "1100UND"' },
    { id: 318, name: 'â€¢SUERO KASERO KO 850 ML "720UND"' },
    { id: 319, name: 'â€¢SUERO LA LAJITA "80UND"' },
    { id: 320, name: 'â€¢SUERO VEGA "950UND"' },
    { id: 321, name: 'â€¢SUERO VEGA PICANTE "80UND"' },
    { id: 322, name: 'TALLARIN ESPECIAL 500 GR "13bultos"' },
    { id: 323, name: 'â€¢TAMARINDO "120UND"' },
    { id: 324, name: 'â€¢TAMARINDO ETNA "222UND"' },
    { id: 325, name: 'TANG "50UND"' },
    { id: 326, name: 'TOALLA KOTEX NOCTURNA "30bultos"' },
    { id: 327, name: 'TOALLAS CONCOR NOCTURNas"05bultos"' },
    { id: 328, name: 'TOALLAS HUMEDAS "03bultos" ' },
    { id: 329, name: 'TOALLIN PAVECA ROSAL TOWELS 24*80 HOJAS "45bulto"' },
    { id: 330, name: 'TOBOS PLASTICO "35UND"' },
    { id: 331, name: 'TODDY 200 GR "22bultos".' },
    { id: 332, name: 'TWISTY QUESO 200 GR "25cajas"' },
    { id: 333, name: 'UVAS PASAS 200GR ""' },
    { id: 334, name: 'VAINILLA "04cajas"' },
    { id: 335, name: 'VELAS * 4 UN POPULAR "04cajas"' },
    { id: 336, name: 'VELAS SEÃ‘OR SEÃ‘OR 4 UNID "05cajas" ""' },
    { id: 337, name: 'VELONES SEÃ‘OR SEÃ‘OR PEQUEÃ‘O UNIDAD "2bultos"' },
    { id: 338, name: 'VINAGRE ETNA MANGO 1 LTS ""' },
    { id: 339, name: 'VINAGRE ETNA MANZANA 300ML ""' },
    { id: 340, name: 'VINAGRE EUREKA 1 LITRO "25bultos"' },
    { id: 341, name: 'VINAGRE KEPA GRANDE DE 1 LTS "40bultos"' },
    { id: 342, name: 'VINAGRE MAVESA DE 1/2 LTS "03bultos".' },
    { id: 343, name: 'VINAGRE TIQUIRE 1/2 LITRO "10bultos"' },
    { id: 344, name: 'YOGURT GUARALAC 400ML"".' },
    { id: 344, name: 'TOALLAS ALIVE DIURNA"".' },
    { id: 344, name: 'TOALLAS ALIVE NOCTURNA "".' },
    { id: 344, name: 'MEGA BOL""' },
].map(product => {
    // Extraer la unidad de medida del nombre del producto
    const match = product.name.match(/"(.*?)"|""/);
    const unit = match ? match[1].replace(/\d+/g, '').replace(/[.Â¿?Â¿Â¡]/g, '').trim().split(' ')[0] : '';
    return { ...product, unit };
});

// Mapeo de empresas a NOMBRES de productos para el modo "Pedido Directo"
const companyProductMapping = {
    'AGRO INDUSTRIAS MONTE CARMELO': ['MAYONESA REAL 445 GR "75cajas".'],
    'ALFONSO RIVAS': ['MAIZOR AZUCARADOS 240 GR "14cajas"', 'MAIZOR BOLSA NORMAL300 "22cajas"', 'MAIZOR FRUTI AROS 240 GR "14cajas"'],
    'ALIMENTOS  HEINZ': ['COMPOTA HEINZ MANZANA 186 GR "10bultos"', 'COMPOTA HEINZ PERA 186 GR "11bultos"', 'SALSA HEINZ/ 397 GR "30cajas"', 'COMPOTA POLLY DE 113 MANZANA GR "02bultos"', 'COMPOTA POLLY DE 113 PERA GR "02bultos".', 'SALSA TIQ FLORES 397 GR "50cajas"', 'SALSA CUMBRE 380 GR "45/50bultos"', 'VINAGRE TIQUIRE 1/2 LITRO "10bultos"', 'GELATINA SONRISA 66 GR "04cajas"'],
    'ALIMENTOS VEMESA C,A': ['MARGARINA VEMESA 400 GR "40cajas"', 'MAYONESA KEMY "55cajas"'],
    'ALIVE': ['JABON ALIVE 1 KILO GR "100bultos"', 'JABON ALIVE 500 GR "78bultos"', 'SHAMPU ALIVE 350 ML "5cajas"', 'TOALLAS ALIVE DIURNA"".', 'TOALLAS ALIVE NOCTURNA "".', 'TOALLAS HUMEDAS "03bultos" ', 'PAÃ‘ALES BABY FINGER G- XG 10 UND "01bulto"', 'PAÃ‘ALES BABY FINGER GD 16 UND ""', 'PRESTOBARBA DORCO X5 "130UND"'],
    'ASOPORTUGUESA': ['HARINA ARAURIGUA 1 KILO "1050bultos"', 'HARINA DOÃ‘A EMILIA 1 KILO "365bultos"', 'ARROZ DOÃ‘A EMIIA 900 GMS".'],
    'CAFÃ‰ EN GRANO': ['â€¢CAFÃ‰ EN GRANO 250 GR *40 COROMOTANA "02bultos"', 'â€¢CAFÃ‰ EN GRANOS DULCE AMARGO 400GR "04bultos"', 'â€¢CAFÃ‰ FRONTINO DE 400 GR "04bultos"'],
    'CAMPESINO': ['LECHE CAMPIÃ‘A DE 400 GR "40bultos"', 'CEPILLO DENTAL COLGATE "03cajas"', 'CREMA COLG/TRIP PLAX 60 GR "10cajas"', 'CREMA COLGATE NORMAL 90 GR "05cajas"', 'CREMA COLGATE KIDS 50 GM GRM".', 'DESODORANTE LEIDY TUBO  30 GR "12cajas"', 'JABON PALMOLIVE 85 GR "13cajas".', 'JABON PROTEX 110 GR "14cajas"', 'LAVAP AXION 225 GR "08cajas"'],
    'CAPRI': ['ACEITE DE OLIVA CAPRI 250 ML X 12 UND "15bultos"', 'ACEITE DE OLIVA CAPRI DE 500ML".', 'FIDEO CAPRI 250 GR "13bultos"', 'PASTA CAPRI 1 KILO CORTA AZUL "160bultos"', 'PASTA CAPRI 1 KILO LARGA AZUL "200bultos"'],
    'CEREVEN': ['FORORO VALLE HOND 400 GR "19bultos".', 'LECHE VALLELAC 375GR "130bultos"'],
    'COMERCILIZADORA 2016': ['ATUN PACIFICO 170 GRM ".'],
    'COPOSA': ['MARGARINA MIRASOL 454 GR "46cajas"', 'ACEITE NATUROIL 850 ML "50bultos"'],
    'DEVITA RICARDO': ['AVENA DEVITA 400 GR "90bultos"', 'CARAOTAS D"VITA 400 GR "17bultos"', 'LENTEJAS DEVITA 400 GR "24bultos"', 'MAIZ DE COTUFA DVITA 400 GR "09bultos"', 'AVENA DON JORGE/ 400 GR "25bultos".', 'CAFÃ‰ CORDILLERA 200 GR "80bultos"', 'CAFÃ‰ CORDILLERA 500 GR "70bultos"'],
    'DIALCA': ['JABON REXONA 110 GR "10cajas"', 'SHAMPU SAVITAL "07cajas"'],
    'DIGILCA': ['CARNE DE SOYA SOY TEX 200 GR "06bultos"'],
    'DIMASSI': ['PAÃ‘ALES HUGGUIES * 20 UNID G AZUL "04bulto"', 'PAÃ‘ALES HUGGUIES MED "04bultos"', 'TOALLA KOTEX NOCTURNA "30bultos"'],
    'EUREKA': ['MOSTAZA EUREKA PLASTICA 285 GR "20/21cajas"', 'VINAGRE EUREKA 1 LITRO "25bultos"'],
    'GENICA': ['LACTOVISOY COLONA 500GR "02bultos"', 'TWISTY QUESO 200 GR "25cajas"'],
    'IBERIA': ['SALSA INGLESA IBERIA 150CC "15bultos"', 'SOPÃ SOBRE IBERIA "2cajas"'],
    'INCOSA': ['SARDINA INCOSA TOMATE 170 GR "250bultos"', 'SARDINA INCOSA ACEITE 170 GR ".'],
    'INDUSTRIAS EL INTENTO ': ['ARROZ CONQUISTA 900 GR "52bultos"'],
    'LA ESPECIAL': ['HARINA TRIGO ESPECIAL LEUD 900 GR "150bultos"', 'HARINA TRIGO ESPECIAL TODO USO 900 GR "52bultos"', 'MAYONESA ESPECIAL 445 GR "20cajas"', 'PASTA ESPECIAL CORTA "400bultos"', 'PASTA ESPECIAL LARGA "680bultos"', 'TALLARIN ESPECIAL 500 GR "13bultos"'],
    'LACTEOS SAN SIMON': ['LECHE LIQUIDA SAN SIMON 1 LT "35cajas"', 'LECHE MONTAÃ‘A FRESCA 400 GR "90bultos"'],
    'MAIZALITO': ['CARAOTA MAIZAL400 GR "105bultos"', 'LENTEJAS MAIZAL 400/GR "28bultos"', 'MAIZ DE COTUFA MAIZAL 400 GR "25bultos"', 'FRIJOL PICO NEGRO MAIZALITO*30 ".'],
    'MARIAN DISTRIBUIDORA': ['ATUN PEÃ‘ERO 170 GR VERDE "170bultos".', 'ATUN DIPLOMATICO AZUL 170 GR "185bultos"'],
    'MARY-LORO-': ['ARROZ MARY TRADICIONAL 900 GR ""', 'CREMA ARROZ MARY 450 GR "04bultos"', 'HARINA DE TRIGO MARY 900 GR "55bultos"', 'GALLETA CALEDONIA /250 GR "23UND"', 'GALLETA TIP TOP 80 GR "12cajas"', 'GALLETA CHARMY 216 GR "23bultos"'],
    'MASIAS HARINA ARROZ': ['ARROZ MASIA 900 GR "430bultos"', 'HARINA MASIAS 900 GMS ".'],
    'MISEVEN': ['HARINA KALY PREMIUN ( NUEVA )"110bultos"'],
    'MIXTO FESTIVAL': ['MEGA AROS "30bultos"', 'MEGA BOL"".', 'PEPITO CHEEZ PEK 75 GR "16bultos"', 'PEPITO OSTIS 100 GR "15bultos"'],
    'MONDELE INTERNANCIONAL': ['GALLETA CLUB SOCIAL "20cajas"', 'GALLETA OREO 1 TUBO "11cajas"', 'MAYONESA KRAFT 175 GR "10cajas"', 'MAYONESA KRAFT 445 GR "70cajas"', 'GALLETA KRAKER/ HONNY BRAN "16cajas"', 'TANG "50UND"'],
    'MULTINACIONAL DE SABORES': ['REFRESCO GLUP 2 LITROS"20bultos"', 'JUGO YUSTY 1/5 ML "50bultos".'],
    'NATULAC': ['COMPOTA NATULAC MANZANA 186 GR "12bultos"', 'COMPOTA NATULAC PERA 186 GR "11bultos"', 'JUGO NATULAC PERA 250 ML*24".', 'JUGO NATULAC MANZANA 250 ML*24 "55cajas"', 'LECHE CONDENSADA NATULAC 380 ML "08cajas"', 'LECHE CONDENSADA MAITA "25cajas"', 'CHOCO PILO 220 GR "07cajas"'],
    'NESTLE': ['CERELAC BOLSA 400 GR "02cajas"', 'CUBITO MAGGI "05cajas"', 'NESTUN BOLSA 225 GR 3 CEREALES "02cajas"', 'SOPA SOBRE MAGGY "20cajas"', 'GATARINA GATSY 20 KG ""', 'PERRAR DOGOURMENT ADULTO 1/2 KG""', 'PERRAR DOGOURMENT CACHORRO 1/2 KG""'],
    'NUEVA TENDENCIA': ['SALSA CHINA 150GR "13bultos"', 'DIABLITO UNDERWOOD 54 GR "22cajas"'],
    'OTROS PRODUCTOS ': ['ACEITE AGROIL 828 ML "480bultos"', 'AZUCAR PASTORA "650bultos" ', 'CARAOTA PESADA NEGRAS/ROJAS 500 GR "2600kg"', 'CHOCOLATE TERRY 200GR X24 "11bultos"', 'CLORO TAPA AMARILLA1 LITRO "20bultos"', 'CREMA GALACTIC 75 GR "22cajas"', 'GUISANTES TIGO 300 GR "03cajas"', 'JUGO DEL MONTES 200ML "07cajas".', 'LAVAPLATO ALMESSY 450 GR "02cajas"', 'MAIZ DULCE PAFIA "06cajas "', 'PANELA DULCE 500 gr CON ETIQUETA "25bultos"', 'SUAVITEL SOBRE "35cajas"', 'TOALLAS CONCOR NOCTURNas"05bultos"', 'VINAGRE KEPA GRANDE DE 1 LTS "40bultos"', 'LIMPIA POCETAS MAS "03cajas"', 'SALSA FRITZ PICANTE "3cajas"', 'TOBOS PLASTICO "35UND"', 'QUINCHONCHO 1/2 "167kg"', 'PAPEL CARICIAS DE 600HOJAS".', 'LENTEJAS PESADA 500 GR "1000kg"', 'â€¢MORTADELA PLUMROSE 1 KILO "40/45bultos"', 'CLORO ENMANUEL 1 LITRO "14bultos"', 'BOMBILLOS AMARILLO "02bultos"', 'BOMBILLOS LED 15WAT "4bultos"', 'ATUN PACIFICO 170 GRM ".', 'SAL ESMERALDA "22bultos"', 'SAL EN SAL "65bultos"'],
    'PAPELES VENEZOLANO': ['PAPEL /ROSAL 4 ROLL 215 BLANCO "160bultos"', 'PAPEL ROSAL 400 HOJAS "105bultos"', 'PAPEL ROSAL DE 600 HOJAS "105bultos"', 'TOALLIN PAVECA ROSAL TOWELS 24*80 HOJAS "45bulto"', 'SERVILLETA Z PEQUEÃ‘A "45bultos"'],
    'PRODUCTOS 8 DE MARZO': ['AFRECHO 500 GR "07bultos"', 'AVENA 8 DE MARZO 400 GR "10bultos"', 'GRANOLA 8 DE MARZO ""', 'PASTA INTEGRAL 8 D MARZO "07bultos"', 'CAFÃ‰ MATILDE "22bultos"'],
    'PRODUCTOS CARGIL DE VENZ': ['ACEITE VATEL SOYA 1 LITRO "85bultos"', 'ACEITE VATEL SOYA 1/2 LITRO "30bultos"', 'PASTA RONCO DE 500 GR "05bultos"', 'PASTICHO RONCO DE 250 GR "13bultos"'],
    'PRODUCTOS EL REY': ['SALSAS LIQUIDA REY AJO 150 CC "25cajas"', 'SALSAS LIQUIDA REY INGLESA 150 CC "10cajas"', 'SALSAS LIQUIDA REY SOYA 150 CC "15cajas"'],
    'PUIG': ['GALLETA MARIASELECTA PUIG "18cajas"', 'GALLETA SODA PUIG SOL "20cajas"'],
    'SALSA GIRALDA': ['ALCAPARRAS GIRALDA ".', 'ACEITUNAS RELLENAS GIRALDA/200 GR "06bultos"', 'SALSA PARA PASTA GIRALDA "05cajas"'],
    'SANDY': ['ALIÃ‘O SAN MIGUEL GRAND "03bultos"', 'ALIÃ‘O SAN MIGUEL PQ "11bultos"'],
    'SANTONNY': ['MAIZORITO PLANET FRUIT 240 GR "16cajas"'],
    'SUPER DULCES': ['GALLETA MARIA ITALIA "100bultos"', 'GALLETA DUCALES 105 GR "02cajas"'],
    'UNILEVER': ['DESODORANTE EVERY NIGHT "16cajas"', 'JABON EVERY NIGHT 110 GR "11cajas"', 'GELATINA EVERY NIGHT 250 GR "05bultos"'],
    'VELAS SEÃ‘OR SEÃ‘OR Y POPULARES': ['VELAS * 4 UN POPULAR "04cajas"', 'VELAS SEÃ‘OR SEÃ‘OR 4 UNID "05cajas" ""', 'VELONES SEÃ‘OR SEÃ‘OR PEQUEÃ‘O UNIDAD "2bultos"'],
    'ZUYCH': ['SALSAS ROSADA ZUYCH/ 240 GR "02cajas"', 'SALSAS ZUYCH CHEDDAR "04cajas"', 'SALSAS ZUYHC MAIZ ""']
};

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const filterSelectedBtn = document.getElementById('filterSelectedBtn');
const filterPanesBtn = document.getElementById('filterPanesBtn');
const filterPolarBtn = document.getElementById('filterPolarBtn');
const directOrderBtn = document.getElementById('directOrderBtn');
const filterButtonsContainer = document.getElementById('filterButtonsContainer');
const companyFiltersContainer = document.getElementById('companyFiltersContainer');
const selectedProductsContainer = document.getElementById('selectedProductsContainer');
const selectedProductsList = document.getElementById('selectedProductsList');

// Pre-procesar productos para la bÃºsqueda de "Pedido Directo"
const directOrderProducts = [];
Object.keys(companyProductMapping).forEach(company => {
    const productNames = companyProductMapping[company];
    productNames.forEach(name => {
        const product = products.find(p => p.name === name);
        if (product) {
            if (!directOrderProducts.some(p => p.id === product.id)) {
                directOrderProducts.push({ ...product, company: company });
            }
        }
    });
});

let selectedProducts = [];

const calculatorModal = document.getElementById('calculatorModal');
const modalProductName = document.getElementById('modalProductName');
const calculatorDisplay = document.getElementById('calculatorDisplay');
const closeModalBtn = document.getElementById('closeModalBtn');
const exportExcelBtn = document.getElementById('exportExcelBtn');
const downloadImageBtn = document.getElementById('downloadImageBtn');
const shareBtn = document.getElementById('shareBtn');
const exportDirectOrderBtn = document.getElementById('exportDirectOrderBtn');
const mainCloseBtn = document.getElementById('mainCloseBtn');
const warningModal = document.getElementById('warningModal');
const cancelExitBtn = document.getElementById('cancelExitBtn');
const confirmExitBtn = document.getElementById('confirmExitBtn');
const warningTitle = document.getElementById('warningTitle');
const warningMessage = document.getElementById('warningMessage');
const topRightButtons = document.getElementById('topRightButtons');

// Modal de vista previa
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');
const closePreviewBtn = document.getElementById('closePreviewBtn');
const downloadPreviewBtn = document.getElementById('downloadPreviewBtn');
const downloadPreviewIconBtn = document.getElementById('downloadPreviewIconBtn');

// Modal de ayuda
const helpBtn = document.getElementById('helpBtn');
const helpModal = document.getElementById('helpModal');
const closeHelpModalBtn = document.getElementById('closeHelpModalBtn');

// Elementos del modal de responsables
const addResponsablesBtn = document.getElementById('addResponsablesBtn');
const responsablesModal = document.getElementById('responsablesModal');
const responsable1Input = document.getElementById('responsable1Input');
const responsable2Input = document.getElementById('responsable2Input');
const cancelResponsablesBtn = document.getElementById('cancelResponsablesBtn');
const confirmResponsablesBtn = document.getElementById('confirmResponsablesBtn');

// El modal de compartir y sus variables han sido eliminados

// BotÃ³n de opciones y contenedor de botones de exportaciÃ³n
const optionsBtn = document.getElementById('optionsBtn');
const exportButtonsContainer = document.getElementById('exportButtonsContainer');

let currentQuantity = '';
let currentProduct = null;
let searchTimeout;
let productIdToDelete = null;
let responsables = ['', ''];
let menuTimeoutId = null;
let customProducts = [];

function saveToLocalStorage() {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('responsables', JSON.stringify(responsables));
    localStorage.setItem('customProducts', JSON.stringify(customProducts));
}

function loadFromLocalStorage() {
    const savedSelected = localStorage.getItem('selectedProducts');
    if (savedSelected) selectedProducts = JSON.parse(savedSelected);

    const savedResponsables = localStorage.getItem('responsables');
    if (savedResponsables) responsables = JSON.parse(savedResponsables);

    const savedCustom = localStorage.getItem('customProducts');
    if (savedCustom) {
        customProducts = JSON.parse(savedCustom);
        // Asegurarse de que los productos personalizados se añadan a la lista principal
        customProducts.forEach(cp => {
            if (!products.some(p => p.id === cp.id)) {
                products.push(cp);
            }
        });
    }

    // Actualizar la interfaz después de cargar
    if (responsables[0] || responsables[1]) {
        filterButtonsContainer.classList.remove('hidden');
        document.querySelectorAll('.filter-item').forEach(item => item.classList.add('show'));
    }
}

function showModal(modal) {
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideModal(modal) {
    if (!modal) return;
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // DuraciÃ³n de la transiciÃ³n
}

let filters = {
    selected: false,
    panes: false,
    polar: false,
    directOrder: false,
    all: true
};

// Define el conjunto de productos para el "Pedido Directo"
const directOrderProductIds = [1, 23, 131, 167, 197];

function renderProducts(filteredProducts) {
    productList.innerHTML = '';

    if (filteredProducts.length === 0) {
        productList.innerHTML += '<p class="col-span-full text-center text-gray-500 text-lg">No se encontraron productos que coincidan con los filtros o la bÃºsqueda.</p>';
        return;
    }

    let sortedList = [...filteredProducts];
    sortedList.sort((a, b) => {
        const nameA = a.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    const listHtml = sortedList.map(item => {
        const isSelected = selectedProducts.some(p => p.id === item.id);
        const cardClass = isSelected ? 'product-card selected' : 'product-card';
        return `
                    <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                        <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
                    </div>
                `;
    }).join('');

    productList.innerHTML += listHtml;
}

function renderSelectedProducts(productsToRender) {
    const productsToShow = productsToRender !== undefined ? productsToRender : selectedProducts;

    selectedProductsList.innerHTML = '';

    const sortedProducts = [...productsToShow].sort((a, b) => {
        const nameA = a.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    if (selectedProducts.length > 0) {
        helpBtn.classList.add('hidden');
    } else {
        helpBtn.classList.remove('hidden');
    }

    if (sortedProducts.length > 0) {
        const selectedHtml = sortedProducts.map(product => {
            return `
                        <div class="bg-blue-50 dark:bg-slate-700 p-4 rounded-lg shadow-md flex justify-between items-center transition-all duration-200 border-2 border-blue-400 dark:border-blue-700">
                            <span class="font-medium text-blue-800 dark:text-blue-200">${product.name}</span>
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-blue-900 dark:text-blue-100">${product.quantity} ${product.unit}</span>
                                <button class="delete-button" data-id="${product.id}">Eliminar</button>
                            </div>
                        </div>
                    `;
        }).join('');
        selectedProductsList.innerHTML = selectedHtml;
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.id, 10);
                productIdToDelete = productId;
                warningTitle.textContent = 'Confirmar Eliminación';
                warningMessage.textContent = '¿Estás seguro de que deseas eliminar este producto?';
                confirmExitBtn.textContent = 'Sí, eliminar';
                cancelExitBtn.textContent = 'Cancelar';
                showModal(warningModal);
            });
        });
    } else {
        if (selectedProducts.length > 0 && productsToRender !== undefined) {
            selectedProductsList.innerHTML = '<p class="text-center text-gray-500 text-lg">No se encontraron productos seleccionados que coincidan con la bÃºsqueda.</p>';
        } else {
            selectedProductsList.innerHTML = '<p class="text-center text-gray-500 text-lg">AÃºn no has agregado productos.</p>';
        }
    }
}

function updateUI() {
    const isAnyFilterActive = filters.selected || filters.panes || filters.polar || filters.directOrder;
    const searchContainer = document.getElementById('searchContainer');
    const directOrderSearchResultsContainer = document.getElementById('directOrderSearchResultsContainer');

    // La visibilidad de los botones de exportaciÃ³n ahora se gestiona en el event listener del botÃ³n de opciones.

    // Oculta los otros botones de filtro cuando uno estÃ¡ activo
    filterSelectedBtn.classList.toggle('hidden', isAnyFilterActive && !filters.selected);
    filterPanesBtn.classList.toggle('hidden', isAnyFilterActive && !filters.panes);
    filterPolarBtn.classList.toggle('hidden', isAnyFilterActive && !filters.polar);
    directOrderBtn.classList.toggle('hidden', isAnyFilterActive && !filters.directOrder);

    // Ajusta la cuadrÃ­cula para que el botÃ³n activo ocupe todo el espacio
    if (isAnyFilterActive) {
        filterButtonsContainer.classList.remove('sm:grid-cols-4');
    } else {
        filterButtonsContainer.classList.add('sm:grid-cols-4');
    }

    if (isAnyFilterActive || selectedProducts.length > 0) {
        helpBtn.classList.add('hidden');
    } else {
        helpBtn.classList.remove('hidden');
    }

    if (isAnyFilterActive) {
        mainCloseBtn.classList.remove('hidden');
        topRightButtons.classList.add('hidden');
    } else {
        mainCloseBtn.classList.add('hidden');
        topRightButtons.classList.remove('hidden');
    }

    if (filters.selected) {
        productList.classList.add('hidden');
        selectedProductsContainer.classList.remove('hidden');
        companyFiltersContainer.classList.add('hidden');
        directOrderSearchResultsContainer.classList.add('hidden');
        renderSelectedProducts();
    } else {
        productList.classList.remove('hidden');
        selectedProductsContainer.classList.add('hidden');
    }

    filterPanesBtn.classList.toggle('active', filters.panes);
    filterPolarBtn.classList.toggle('active', filters.polar);
    filterSelectedBtn.classList.toggle('active', filters.selected);
    directOrderBtn.classList.toggle('active', filters.directOrder);

    if (filters.directOrder) {
        productList.classList.add('hidden');
        // Si hay un tÃ©rmino de bÃºsqueda, muestra los resultados, si no, muestra las empresas
        if (searchInput.value.trim()) {
            directOrderSearchResultsContainer.classList.remove('hidden');
            companyFiltersContainer.classList.add('hidden');
        } else {
            directOrderSearchResultsContainer.classList.add('hidden');
            companyFiltersContainer.classList.remove('hidden');
        }
    } else {
        companyFiltersContainer.classList.add('hidden');
        directOrderSearchResultsContainer.classList.add('hidden');
    }
}

function filterAndRenderProducts() {
    // Si el filtro de 'seleccionados' estÃ¡ activo, no hacemos NADA MÃS.
    // La funciÃ³n updateUI() ya se encarga de mostrar/ocultar los contenedores correctos.
    if (filters.selected) {
        updateUI();
        return;
    }

    const searchTerm = searchInput.value.toLowerCase();
    let baseProducts;

    // Primero, determinamos la lista base de productos segÃºn el filtro activo
    if (filters.panes) {
        baseProducts = products.filter(product => product.name.includes('â€¢'));
    } else if (filters.polar) {
        baseProducts = products.filter(product => product.name.endsWith('.'));
    } else {
        // Si no hay un filtro de categorÃ­a, la base son todos los productos
        baseProducts = [...products];
    }

    // Luego, aplicamos el tÃ©rmino de bÃºsqueda a la lista base
    const filteredProducts = searchTerm
        ? baseProducts.filter(product => product.name.toLowerCase().includes(searchTerm))
        : baseProducts;

    productList.classList.remove('flex', 'flex-col', 'gap-4');
    productList.classList.add('grid', 'sm:grid-cols-2', 'lg:grid-cols-3');

    renderProducts(filteredProducts);
    updateUI(); // Se llama a updateUI al final para sincronizar el estado visual.
}

function updateDisplay() {
    calculatorDisplay.textContent = currentQuantity || '0';
}

function refreshCompanyProductViews() {
    // Encuentra el botÃ³n de la empresa que estÃ¡ actualmente activo
    const activeButton = companyFiltersContainer.querySelector('.company-list-item.active');
    if (!activeButton) return; // Si no hay ninguno activo, no hace nada

    const companyName = activeButton.dataset.company;
    const productsContainer = companyFiltersContainer.querySelector(`[data-container-for="${companyName}"]`);

    const productNames = companyProductMapping[companyName] || [];
    if (productNames.length > 0) {
        const companyProducts = products.filter(p => productNames.includes(p.name));

        companyProducts.sort((a, b) => {
            const nameA = a.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
            const nameB = b.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        // Vuelve a generar el HTML para los productos de esa empresa, aplicando la clase 'selected' si es necesario
        const productsHtml = companyProducts.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                        <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                            <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
                        </div>
                    `;
        }).join('');
        productsContainer.innerHTML = productsHtml;
    } else {
        productsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No hay productos para esta empresa.</p>';
    }
}

function renderDirectOrderSearchResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const companyContainer = document.getElementById('companyFiltersContainer');
    const searchResultsContainer = document.getElementById('directOrderSearchResultsContainer');

    if (!searchTerm) {
        companyContainer.classList.remove('hidden');
        searchResultsContainer.classList.add('hidden');
        searchResultsContainer.innerHTML = '';
        companyContainer.querySelectorAll('.company-section').forEach(section => {
            section.classList.remove('hidden');
        });
        return;
    }

    companyContainer.classList.add('hidden');
    searchResultsContainer.classList.remove('hidden');
    searchResultsContainer.innerHTML = '';

    const filteredResults = directOrderProducts.filter(item =>
        item.name.toLowerCase().includes(searchTerm) || item.company.toLowerCase().includes(searchTerm)
    );

    filteredResults.sort((a, b) => {
        const nameA = a.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    if (filteredResults.length > 0) {
        const resultsHtml = filteredResults.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                        <div class="${cardClass} flex flex-col items-start w-full bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                            <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.name}</h2>
                            <p class="text-xs text-purple-700 font-semibold mt-1">${item.company}</p>
                        </div>
                    `;
        }).join('');
        searchResultsContainer.innerHTML = resultsHtml;
    } else {
        searchResultsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No se encontraron productos o empresas.</p>';
    }
}

function handleCalculatorClick(event) {
    const value = event.target.dataset.value;
    if (!value) return;

    if (value === 'backspace') {
        currentQuantity = currentQuantity.slice(0, -1);
    } else if (value === 'confirm') {
        if (currentQuantity !== '' && currentProduct) {
            const quantity = parseInt(currentQuantity, 10);
            const existingProductIndex = selectedProducts.findIndex(p => p.id === currentProduct.id);

            if (quantity === 0) {
                if (existingProductIndex !== -1) {
                    selectedProducts.splice(existingProductIndex, 1);
                }
            } else {
                if (existingProductIndex !== -1) {
                    selectedProducts[existingProductIndex].quantity = quantity;
                } else {
                    selectedProducts.push({ id: currentProduct.id, name: currentProduct.name, quantity: quantity, unit: currentProduct.unit });
                }
            }
            saveToLocalStorage();
            hideModal(calculatorModal);

            hideModal(calculatorModal);
            currentQuantity = '';
            currentProduct = null;
            filterAndRenderProducts();
            refreshCompanyProductViews();
            if (filters.directOrder && searchInput.value) {
                renderDirectOrderSearchResults();
            }
        }
    } else {
        if (currentQuantity.length < 9) {
            currentQuantity += value;
        }
    }
    updateDisplay();
}

function exportToPDF() {
    const searchTerm = searchInput.value.toLowerCase();
    let productsToExport;
    let isExportingAll = false;

    if (filters.panes) {
        productsToExport = products.filter(product => (product.name || "").includes('•') || (product.name || "").includes('â€¢'));
        isExportingAll = true;
    } else if (filters.polar) {
        productsToExport = products.filter(product => (product.name || "").endsWith('.'));
        isExportingAll = true;
    } else if (filters.selected) {
        productsToExport = [...selectedProducts];
    } else {
        productsToExport = [...products];
        isExportingAll = true;
    }

    if (searchTerm) {
        productsToExport = productsToExport.filter(product => (product.name || "").toLowerCase().includes(searchTerm));
    }

    if (productsToExport.length === 0) {
        const message = isExportingAll ?
            'No hay productos que coincidan con los filtros actuales para exportar.' :
            'No hay productos seleccionados para exportar.';
        showMessage(message, '#fca5a5', '#7f1d1d');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const dateString = `${day}/${month}/${today.getFullYear()}`;

        let orderTitle = 'FERIA ESTE';
        if (filters.polar) orderTitle = 'PEDIDO DE LA POLAR';
        else if (filters.panes) orderTitle = 'PEDIDO DE LA CAVA';
        else if (filters.selected) orderTitle = 'PRODUCTOS SELECCIONADOS';

        const responsablesString = responsables.filter(r => r).join(' - ');

        // Configuración de encabezado
        doc.setFontSize(14);
        doc.setTextColor(40);
        doc.text(orderTitle, 105, 12, { align: 'center' });

        doc.setFontSize(8);
        doc.text(`FECHA: ${dateString}`, 15, 20);
        doc.text(`RESPONSABLES: ${responsablesString}`, 15, 24);

        const tableData = productsToExport.map(product => {
            let quantityText = '';
            const productUnit = product.unit || '';

            let cleanName = (product.name || "").replace(/^\d+\.\s*/, '');
            cleanName = cleanName.replace(/[••.-]/g, '').trim();

            const productNameForExport = cleanName.replace(/"(.*?)"/g, (match, group1) => {
                if (!group1) return '""';
                const unitText = group1.replace(/[^\w\s]/g, '').trim().toUpperCase();
                return `"${unitText}"`;
            });

            if (isExportingAll) {
                const selectedProd = selectedProducts.find(sp => sp.id === product.id);
                quantityText = selectedProd ? selectedProd.quantity : '';
            } else {
                quantityText = product.quantity;
            }

            return [
                productNameForExport,
                quantityText,
                '',
                '',
                quantityText,
                productUnit.toUpperCase()
            ];
        });

        doc.autoTable({
            startY: 28,
            head: [['PRODUCTO', 'FERIA ESTE', 'FERIA CENTRO', 'FERIA RUIZ P.', 'TOTAL', 'UNIDAD']],
            body: tableData,
            theme: 'grid',
            headStyles: { fillColor: [59, 130, 246], textColor: [255, 255, 255], fontStyle: 'bold', halign: 'center', fontSize: 8, cellPadding: 1 },
            styles: { lineColor: [0, 0, 0], lineWidth: 0.1, fontSize: 7.5, valign: 'middle', cellPadding: 1 },
            columnStyles: { 0: { cellWidth: 70 }, 1: { halign: 'center' }, 2: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'center', fontStyle: 'bold' }, 5: { halign: 'center' } }
        });

        doc.save(`Pedido_${day}_${month}.pdf`);
        showMessage('PDF exportado con éxito.', '#86efac', '#166534');
    } catch (error) {
        console.error(error);
        showMessage('Error al exportar: ' + error.message, '#fca5a5', '#7f1d1d');
    }
}
// --- FUNCIÃ“N MODIFICADA ---
function exportDirectOrderToPDF() {
    if (selectedProducts.length === 0) {
        showMessage('No hay productos seleccionados para exportar.', '#fca5a5', '#7f1d1d');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const dateString = `${day}/${month}/${today.getFullYear()}`;

        const responsablesString = responsables.filter(r => r).join(' - ');

        doc.setFontSize(14);
        doc.text('PEDIDO DIRECTO FERIA ESTE', 105, 12, { align: 'center' });

        doc.setFontSize(8);
        doc.text(`FECHA: ${dateString}`, 15, 20);
        doc.text(`RESPONSABLES: ${responsablesString}`, 15, 24);

        const allDirectOrderItems = [];
        Object.keys(companyProductMapping).forEach(company => {
            const productNames = companyProductMapping[company];
            productNames.forEach(name => {
                const product = products.find(p => p.name === name);
                if (product) {
                    allDirectOrderItems.push({ product, company });
                }
            });
        });

        allDirectOrderItems.sort((a, b) => {
            const nameA = (a.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
            const nameB = (b.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        const tableData = allDirectOrderItems.map(item => {
            const product = item.product;
            const company = item.company;
            const selectedProd = selectedProducts.find(sp => sp.id === product.id);
            const quantity = selectedProd ? selectedProd.quantity : '';

            let cleanName = (product.name || "").replace(/^\d+\.\s*/, '');
            cleanName = cleanName.replace(/[••.-]/g, '').trim();

            const productNameForExport = cleanName.replace(/"(.*?)"/g, (match, group1) => {
                if (!group1) return '""';
                const unitText = group1.replace(/[^\w\s]/g, '').trim().toUpperCase();
                return `"${unitText}"`;
            });

            return [productNameForExport, quantity, (company || "").toUpperCase(), '', quantity, (product.unit || "").toUpperCase()];
        });

        doc.autoTable({
            startY: 28,
            head: [['PRODUCTO', 'FERIA ESTE', 'EMPRESA', 'FERIA RUIZ P.', 'TOTAL', 'UNIDAD']],
            body: tableData,
            theme: 'grid',
            headStyles: { fillColor: [59, 130, 246], textColor: [255, 255, 255], fontStyle: 'bold', halign: 'center', fontSize: 8, cellPadding: 1 },
            styles: { lineColor: [0, 0, 0], lineWidth: 0.1, fontSize: 7.5, valign: 'middle', cellPadding: 1 },
            columnStyles: { 0: { cellWidth: 70 }, 1: { halign: 'center' }, 2: { halign: 'center' }, 3: { halign: 'center' }, 4: { halign: 'center', fontStyle: 'bold' }, 5: { halign: 'center' } }
        });

        doc.save(`Pedido_Directo_${day}_${month}.pdf`);
        showMessage('PDF Directo exportado con éxito.', '#86efac', '#166534');
    } catch (error) {
        console.error(error);
        showMessage('Error al exportar: ' + error.message, '#fca5a5', '#7f1d1d');
    }
}

async function generateOrderImage() {
    // Esta funciÃ³n genera la imagen del pedido y devuelve la URL de datos base64.
    // Devuelve nulo si no hay productos seleccionados.
    if (selectedProducts.length === 0) {
        showMessage('No hay productos seleccionados para exportar.', '#fca5a5', '#7f1d1d');
        return null;
    }

    const contentToCapture = document.createElement('div');
    // Estilos mejorados para la captura de la imagen
    contentToCapture.classList.add('p-4', 'bg-white', 'w-full');
    contentToCapture.style.width = '350px'; // Ancho fijo para mejorar la visualizaciÃ³n en mÃ³vil

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `FECHA: ${day}-${month}-${year}`;

    const responsablesString = responsables.filter(r => r).join(' - ');

    contentToCapture.innerHTML = `
                <div class="text-center font-bold text-xl mb-3 text-gray-800">
                    Pedido de Viveres
                </div>
                <div class="text-xs text-gray-600 mb-1 text-center">
                    <span>${dateString}</span> | <span>FERIA ESTE</span>
                </div>
                ${responsablesString ? `<div class="text-xs text-gray-600 mb-3 text-center"><span class="font-bold">RESPONSABLES:</span> ${responsablesString}</div>` : '<div class="mb-2"></div>'}
                <div id="captureList" class="flex flex-col gap-2"></div>
            `;

    const captureList = contentToCapture.querySelector('#captureList');

    // Crear una copia ordenada de los productos para que la imagen sea consistente con la vista
    const sortedProducts = [...selectedProducts].sort((a, b) => {
        const nameA = a.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[â€¢.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    sortedProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('bg-blue-50', 'p-3', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'text-sm');
        item.innerHTML = `
                    <span class="font-medium text-blue-800">${product.name}</span>
                    <span class="font-bold text-blue-900">${product.quantity} ${product.unit}</span>
                `;
        captureList.appendChild(item);
    });

    document.body.appendChild(contentToCapture);

    const canvas = await html2canvas(contentToCapture, {
        scale: 2,
        backgroundColor: '#ffffff'
    });

    document.body.removeChild(contentToCapture);
    return canvas.toDataURL('image/png');
}

async function shareToWhatsApp() {
    const image = await generateOrderImage();
    if (!image) return;

    try {
        // Convertir base64 a blob
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], 'pedido.png', { type: blob.type });

        // Comprobar si la API de Web Share es compatible
        if (navigator.share && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'Pedido de Viveres',
                text: 'AquÃ­ estÃ¡ el pedido de viveres.',
            });
            showMessage('Pedido compartido con Ã©xito.', '#86efac', '#166534');
        } else {
            showMessage('La funciÃ³n de compartir no es compatible con este navegador. Por favor, descarga la imagen y compÃ¡rtela manualmente.', '#fca5a5', '#7f1d1d');
        }
    } catch (error) {
        console.error('Error al compartir:', error);
        showMessage('OcurriÃ³ un error al intentar compartir. Por favor, intÃ©ntalo de nuevo.', '#fca5a5', '#7f1d1d');
    }
}

async function exportToImage() {
    const image = await generateOrderImage();
    if (!image) return; // Si la generaciÃ³n de imagen falla, no hacer nada.

    // Mostrar el modal de vista previa en lugar de descargar directamente
    previewImage.src = image;
    showModal(previewModal);

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = image;
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const dateString = `${day}-${month}-${year}`;
        link.download = `Pedido_de_Viveres_${dateString}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        hideModal(previewModal);
        showMessage('Imagen descargada con Ã©xito.', '#86efac', '#166534');
    };

    downloadPreviewBtn.onclick = downloadImage;
    downloadPreviewIconBtn.onclick = downloadImage;
}

function showMessage(message, bgColor, textColor) {
    const messageBox = document.createElement('div');
    messageBox.textContent = message;
    messageBox.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: ${bgColor};
                color: ${textColor};
                padding: 1.5rem;
                border-radius: 0.75rem;
                box-shadow: 0 4px 14px rgba(0,0,0,0.15);
                z-index: 2000;
                font-weight: bold;
                text-align: center;
            `;
    document.body.appendChild(messageBox);
    setTimeout(() => {
        document.body.removeChild(messageBox);
    }, 3000);
}

document.getElementById('mainContainer').addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');
    if (productCard) {
        const productId = parseInt(productCard.dataset.id, 10);
        const productName = productCard.dataset.name;

        const productWithUnit = products.find(p => p.id === productId);

        currentProduct = { id: productId, name: productName, unit: productWithUnit.unit };

        modalProductName.textContent = `Producto: ${productName}`;

        const existingProduct = selectedProducts.find(p => p.id === productId);
        if (existingProduct) {
            currentQuantity = String(existingProduct.quantity);
        } else {
            currentQuantity = '';
        }

        updateDisplay();

        showModal(calculatorModal);
    }
});

closeModalBtn.addEventListener('click', () => {
    hideModal(calculatorModal);
    currentQuantity = '';
    currentProduct = null;
});

calculatorModal.addEventListener('click', (event) => {
    if (event.target.id === 'calculatorModal') {
        hideModal(calculatorModal);
        currentQuantity = '';
        currentProduct = null;
    }
});

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (filters.directOrder) {
            renderDirectOrderSearchResults();
        } else if (filters.selected) {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredSelected = selectedProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
            renderSelectedProducts(filteredSelected);
        } else {
            filterAndRenderProducts();
        }
    }, 300);
});

filterSelectedBtn.addEventListener('click', () => {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    filters.selected = true;
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = false;

    filterAndRenderProducts();
});

function backToList() {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    filters.selected = false;
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = false;
    const searchResultsContainer = document.getElementById('directOrderSearchResultsContainer');
    searchResultsContainer.classList.add('hidden');
    searchResultsContainer.innerHTML = '';
    filterAndRenderProducts();
}

mainCloseBtn.addEventListener('click', backToList);

filterPanesBtn.addEventListener('click', () => {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    filters.selected = false;
    filters.panes = true;
    filters.polar = false;
    filters.directOrder = false;

    filterAndRenderProducts();
});

filterPolarBtn.addEventListener('click', () => {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    filters.selected = false;
    filters.panes = false;
    filters.polar = true;
    filters.directOrder = false;

    filterAndRenderProducts();
});

directOrderBtn.addEventListener('click', () => {
    clearTimeout(searchTimeout);
    searchInput.value = '';

    filters.selected = false;
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = !filters.directOrder;

    const searchResultsContainer = document.getElementById('directOrderSearchResultsContainer');
    searchResultsContainer.classList.add('hidden');
    searchResultsContainer.innerHTML = '';

    if (!filters.directOrder) {
        document.querySelectorAll('.products-for-company').forEach(container => container.classList.add('hidden'));
        document.querySelectorAll('.company-list-item.active').forEach(btn => btn.classList.remove('active'));
    }

    updateUI();
});

function renderCompanyList() {
    companyFiltersContainer.innerHTML = '';
    const companyNames = Object.keys(companyProductMapping).sort();
    const html = companyNames.map(company => `
                <div class="company-section w-full">
                    <button class="company-list-item" data-company="${company}">${company}</button>
                    <div class="products-for-company grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 hidden" data-container-for="${company}">
                        <!-- Products for ${company} will be rendered here -->
                    </div>
                </div>
            `).join('');
    companyFiltersContainer.innerHTML = html;
}

companyFiltersContainer.addEventListener('click', (event) => {
    const companyButton = event.target.closest('.company-list-item');
    if (!companyButton) return;

    const companyName = companyButton.dataset.company;
    const productsContainer = companyFiltersContainer.querySelector(`[data-container-for="${companyName}"]`);

    const isAlreadyOpen = companyButton.classList.contains('active');

    // Close any currently open company section
    companyFiltersContainer.querySelectorAll('.company-list-item.active').forEach(btn => {
        btn.classList.remove('active');
    });
    companyFiltersContainer.querySelectorAll('.products-for-company:not(.hidden)').forEach(container => {
        container.classList.add('hidden');
    });

    if (isAlreadyOpen) {
        // If it was already open, we just close it and we are done.
        return;
    }

    // Open the clicked one
    companyButton.classList.add('active');
    productsContainer.classList.remove('hidden');

    // Populate with products if it's the first time
    if (productsContainer.innerHTML.trim().startsWith('<!--')) {
        const productNames = companyProductMapping[companyName] || []; // Ahora es un array de nombres
        if (productNames.length > 0) {
            const companyProducts = products.filter(p => productNames.includes(p.name)); // Filtrar por nombre

            companyProducts.sort((a, b) => {
                const nameA = (a.name || "").replace(/[•â€¢.-]/g, '').trim().toUpperCase();
                const nameB = (b.name || "").replace(/[•â€¢.-]/g, '').trim().toUpperCase();
                return nameA.localeCompare(nameB);
            });

            const productsHtml = companyProducts.map(item => {
                const isSelected = selectedProducts.some(p => p.id === item.id);
                const cardClass = isSelected ? 'product-card selected' : 'product-card';
                return `
                            <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm" data-id="${item.id}" data-name="${item.name}">
                                <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800">${item.id}. ${item.name}</h2>
                            </div>
                        `;
            }).join('');
            productsContainer.innerHTML = productsHtml;
        } else {
            productsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No hay productos para esta empresa.</p>';
        }
    }
});

document.querySelector('.calculator-buttons-grid').addEventListener('click', handleCalculatorClick);

exportExcelBtn.addEventListener('click', exportToPDF);

downloadImageBtn.addEventListener('click', exportToImage);

shareBtn.addEventListener('click', shareToWhatsApp);

exportDirectOrderBtn.addEventListener('click', exportDirectOrderToPDF);

window.addEventListener('beforeunload', (event) => {
    if (selectedProducts.length > 0) {
        const confirmationMessage = 'Tienes productos seleccionados. Â¿EstÃ¡s seguro de que quieres salir?';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});

cancelExitBtn.addEventListener('click', () => {
    hideModal(warningModal);
});

confirmExitBtn.addEventListener('click', () => {
    if (warningTitle.textContent === 'Confirmar Eliminación') {
        const index = selectedProducts.findIndex(p => p.id === productIdToDelete);
        if (index !== -1) {
            selectedProducts.splice(index, 1);
        }
        saveToLocalStorage();
        renderSelectedProducts();
        filterAndRenderProducts(); // This will re-render the main list view correctly
        refreshCompanyProductViews(); // Actualizar la vista de la empresa si está abierta
        hideModal(warningModal);
    } else if (productIdToDelete === 'ALL') {
        selectedProducts = [];
        saveToLocalStorage();
        renderSelectedProducts();
        filterAndRenderProducts();
        refreshCompanyProductViews();
        hideModal(warningModal);
    } else {
        window.history.back();
    }
});


// Eventos para el nuevo botÃ³n y modal de ayuda
helpBtn.addEventListener('click', () => {
    showModal(helpModal);
});

closeHelpModalBtn.addEventListener('click', () => {
    hideModal(helpModal);
});

helpModal.addEventListener('click', (event) => {
    if (event.target.id === 'helpModal') {
        hideModal(helpModal);
    }
});

// Eventos para el modal de añadir producto
const openAddProductModalBtn = document.getElementById('openAddProductModalBtn');
const addProductModal = document.getElementById('addProductModal');
const cancelAddProductBtn = document.getElementById('cancelAddProductBtn');
const confirmAddProductBtn = document.getElementById('confirmAddProductBtn');
const newProductName = document.getElementById('newProductName');
const newProductType = document.getElementById('newProductType');
const newProductCompany = document.getElementById('newProductCompany');
const companySelectionDiv = document.getElementById('companySelectionDiv');

openAddProductModalBtn.addEventListener('click', () => {
    newProductName.value = '';
    newProductType.value = 'normal';
    companySelectionDiv.classList.add('hidden');

    // Llenar el select de empresas
    newProductCompany.innerHTML = '';
    Object.keys(companyProductMapping).sort().forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        newProductCompany.appendChild(option);
    });

    showModal(addProductModal);
});

newProductType.addEventListener('change', () => {
    if (newProductType.value === 'directo') {
        companySelectionDiv.classList.remove('hidden');
    } else {
        companySelectionDiv.classList.add('hidden');
    }
});

cancelAddProductBtn.addEventListener('click', () => {
    hideModal(addProductModal);
});

confirmAddProductBtn.addEventListener('click', () => {
    let name = newProductName.value.trim();
    if (!name) return;

    const type = newProductType.value;

    // Formatear según el tipo
    if (type === 'panes' && !name.includes('•')) {
        name = '•' + name;
    } else if (type === 'polar' && !name.endsWith('.')) {
        name = name + '.';
    }

    const newId = Math.max(...products.map(p => p.id), 0) + 1;

    // Extraer unidad si existe
    const match = name.match(/"(.*?)"|""/);
    const unit = match ? match[1].replace(/\d+/g, '').replace(/[.¿?¿¡]/g, '').trim().split(' ')[0] : '';

    const newProduct = { id: newId, name: name, unit: unit };

    products.push(newProduct);
    customProducts.push(newProduct);

    if (type === 'directo') {
        const company = newProductCompany.value;
        if (!companyProductMapping[company]) {
            companyProductMapping[company] = [];
        }
        companyProductMapping[company].push(name);

        // Actualizar directOrderProducts
        directOrderProducts.push({ ...newProduct, company: company });

        // Re-renderizar lista de empresas si estamos en ese modo
        renderCompanyList();
    }

    saveToLocalStorage();
    filterAndRenderProducts();
    hideModal(addProductModal);
    showMessage('Producto añadido con éxito.', '#86efac', '#166534');
});

// Evento para vaciar todo
const clearAllBtn = document.getElementById('clearAllBtn');
clearAllBtn.addEventListener('click', () => {
    if (selectedProducts.length === 0) return;

    warningTitle.textContent = 'Vaciar Pedido';
    warningMessage.textContent = '¿Estás seguro de que deseas eliminar TODOS los productos seleccionados?';
    confirmExitBtn.textContent = 'Sí, vaciar todo';
    cancelExitBtn.textContent = 'Cancelar';
    productIdToDelete = 'ALL'; // Marcador especial
    showModal(warningModal);
});

// Eventos para el modal de responsables
addResponsablesBtn.addEventListener('click', () => {
    responsable1Input.value = responsables[0];
    responsable2Input.value = responsables[1];
    showModal(responsablesModal);
});

cancelResponsablesBtn.addEventListener('click', () => {
    hideModal(responsablesModal);
});

confirmResponsablesBtn.addEventListener('click', () => {
    responsables[0] = responsable1Input.value.trim();
    responsables[1] = responsable2Input.value.trim();
    hideModal(responsablesModal);
    saveToLocalStorage();
    showMessage('Responsables actualizados con éxito.', '#86efac', '#166534');

    // --- CÃ“DIGO MODIFICADO PARA LA ANIMACIÃ“N DE FILTROS ---
    if (responsables[0] || responsables[1]) {
        const filterItems = [
            document.getElementById('directOrderBtn'),
            document.getElementById('filterPolarBtn'),
            document.getElementById('filterPanesBtn'),
            document.getElementById('filterSelectedBtn')
        ];
        const animationDelay = 150;

        // Asegurarse de que los items estÃ¡n reseteados antes de la animaciÃ³n
        filterItems.forEach(item => item.classList.remove('show'));

        // Mostrar el contenedor
        filterButtonsContainer.classList.remove('hidden');

        // Animar cada item para que aparezca
        filterItems.forEach((item, index) => {
            void item.offsetWidth; // Forzar reflow para reiniciar la animaciÃ³n
            setTimeout(() => {
                item.classList.add('show');
            }, (index + 1) * animationDelay);
        });
    } else {
        // Si no hay responsables, ocultar el contenedor y resetear la animaciÃ³n
        filterButtonsContainer.classList.add('hidden');
        document.querySelectorAll('.filter-item').forEach(item => item.classList.remove('show'));
    }
});

responsablesModal.addEventListener('click', (event) => {
    if (event.target.id === 'responsablesModal') {
        hideModal(responsablesModal);
    }
});

// Los eventos del modal de compartir han sido eliminados

// Evento para cerrar el modal de vista previa
closePreviewBtn.addEventListener('click', () => {
    hideModal(previewModal);
});

previewModal.addEventListener('click', (event) => {
    if (event.target.id === 'previewModal') {
        hideModal(previewModal);
    }
});

function hideOptionsMenu() {
    if (exportButtonsContainer.classList.contains('hidden')) return;

    const animationDelay = 150;
    // Seleccionar solo los items visibles para la animaciÃ³n de salida
    const visibleMenuItems = Array.from(exportButtonsContainer.querySelectorAll('.menu-item')).filter(
        item => !item.classList.contains('hidden')
    );
    const totalItems = visibleMenuItems.length;

    [...visibleMenuItems].reverse().forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('show');
        }, index * animationDelay);
    });

    const cssTransitionDuration = 500;
    const totalDuration = ((totalItems - 1) * animationDelay) + cssTransitionDuration;
    setTimeout(() => {
        exportButtonsContainer.classList.add('hidden');
    }, totalDuration);
}

optionsBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isHidden = exportButtonsContainer.classList.contains('hidden');
    const animationDelay = 150;

    if (menuTimeoutId) {
        clearTimeout(menuTimeoutId);
    }

    if (isHidden) { // Si estÃ¡ oculto, lo mostramos
        const exportExcelBtn = document.getElementById('exportExcelBtn');
        const exportDirectOrderBtn = document.getElementById('exportDirectOrderBtn');
        const downloadImageBtn = document.getElementById('downloadImageBtn');
        const shareBtn = document.getElementById('shareBtn');

        // LÃ³gica para mostrar/ocultar botones segÃºn el filtro
        if (filters.directOrder) {
            exportExcelBtn.classList.add('hidden');
            exportDirectOrderBtn.classList.remove('hidden');
            downloadImageBtn.classList.remove('hidden');
            shareBtn.classList.remove('hidden');
        } else {
            exportExcelBtn.classList.remove('hidden');
            exportDirectOrderBtn.classList.add('hidden');
            downloadImageBtn.classList.remove('hidden');
            shareBtn.classList.remove('hidden');
        }

        exportButtonsContainer.classList.remove('hidden');

        // Animar solo los botones que no estÃ¡n ocultos
        const menuItemsToShow = Array.from(exportButtonsContainer.querySelectorAll('.menu-item')).filter(
            item => !item.classList.contains('hidden')
        );

        menuItemsToShow.forEach((item, index) => {
            item.classList.remove('show'); // Reiniciar para la animaciÃ³n
            void item.offsetWidth; // Forzar reflow
            setTimeout(() => {
                item.classList.add('show');
            }, (index + 1) * animationDelay);
        });

        menuTimeoutId = setTimeout(hideOptionsMenu, 10000); // Ocultar despuÃ©s de 10 segundos
    } else { // Si estÃ¡ visible, lo ocultamos
        hideOptionsMenu();
    }
});

// El evento para cerrar los botones al hacer clic fuera ha sido eliminado

// --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlEl = document.documentElement;

const setTheme = (theme) => {
    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        darkModeToggle.checked = true;
    } else {
        htmlEl.classList.remove('dark');
        darkModeToggle.checked = false;
    }
};

darkModeToggle.addEventListener('change', () => {
    const newTheme = darkModeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
});

// Initialize theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Default to light, or you can check system preference
    setTheme('light');
}

// Inicializar la interfaz y los productos
loadFromLocalStorage(); // Cargar estado guardado
renderCompanyList();
filterAndRenderProducts();
renderSelectedProducts();
