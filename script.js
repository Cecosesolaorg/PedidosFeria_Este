// Warning modal logic removed


let products = [
    { id: 1, name: 'ACEITE AGROIL 828 ML "480bultos"' },
    { id: 2, name: 'ACEITE DE GIRASOL 1 LITRO "50bultos"' },
    { id: 3, name: 'ACEITE DE OLIVA CAPRI 250 ML X 12 UND "15bultos"' },
    { id: 4, name: 'ACEITE DE OLIVA CAPRI DE 500ML".' },
    { id: 4, name: 'ACEITE DE ACEITE VATEL SOYA 800ML".' },
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
    { id: 19, name: '•ALUMINIO ROLLO "270UND"' },
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
    { id: 41, name: '•BROTES SANARE "135UND"' },
    { id: 42, name: '•CACHITO *20 TODOS "600UND"' },
    { id: 43, name: 'CAFÃ‰ CORDILLERA 200 GR "80bultos"' },
    { id: 44, name: 'CAFÃ‰ CORDILLERA 500 GR "70bultos"' },
    { id: 45, name: '•CAFÃ‰ EN GRANO 250 GR *40 COROMOTANA "02bultos"' },
    { id: 46, name: '•CAFÃ‰ EN GRANOS DULCE AMARGO 400GR "04bultos"' },
    { id: 47, name: '•CAFÃ‰ FRONTINO DE 400 GR "04bultos"' },
    { id: 48, name: 'CAFÃ‰ LO NUESTRO "35bultos"' },
    { id: 49, name: 'CAFÃ‰ MATILDE "22bultos"' },
    { id: 50, name: 'CAFÃ‰ VARYNA ALUMINIO "08bultos"' },
    { id: 51, name: 'CARAOTA MAIZAL400 GR "105bultos"' },
    { id: 52, name: 'CARAOTA PESADA NEGRAS/ROJAS 500 GR "2600kg"' },
    { id: 53, name: 'CARAOTAS D"VITA 400 GR "17bultos"' },
    { id: 54, name: 'CARNE DE SOYA SOY TEX 200 GR "06bultos"' },
    { id: 55, name: '•CATALINAS "185UND"' },
    { id: 56, name: '•CATALINAS/BLANCA *10 "120UND"' },
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
    { id: 70, name: '•COCADAS "130UND"' },
    { id: 70, name: 'CEPILLO DENTAL COLGATE DE NIÑO"' },    
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
    { id: 100, name: '•GALLETA ARTESANAL "130UND"' },
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
    { id: 121, name: 'HARINA DOÑA EMILIA 900 GRS"' },
    { id: 122, name: 'HARINA DE AVENA QUAKER 400 GR "04bultos".' },
    { id: 123, name: 'HARINA DE TRIGO MARY 900 GR "55bultos"' },
    { id: 124, name: 'HARINA DOÃ‘A EMILIA 1 KILO "365bultos"' },
    { id: 125, name: 'HARINA KALY PREMIUN ( NUEVA )"110bultos"' },
    { id: 126, name: 'HARINA MASIAS 900 GMS ".' },
    { id: 127, name: 'HARINA P.A.N AMARILLA "".' },
    { id: 128, name: 'HARINA P.A.N MEZCLA 1 KILO "120bultos".' },
    { id: 129, name: 'HARINA P.A.N NORMAL "700bultos".' },
    { id: 129, name: 'HARINA DOÑA EMILIA MEZCLA 900 GRS".' },
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
    { id: 154, name: 'JABON PROTEX 85 GRS ".' },
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
    { id: 179, name: 'MARGARINA KEMY 400 GRS"' },
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
    { id: 210, name: '•MORTADELA /PUNTA MTE 1 KG "40/45bultos"' },
    { id: 211, name: '•MORTADELA /PUNTA MTE 1/2 KG "20/25bultos"' },
    { id: 212, name: '•MORTADELA ALIBAL 1/2KILO "20/25bultos"' },
    { id: 213, name: '•MORTADELA ALIBAL1 KILO "45/50bultos"' },
    { id: 214, name: '•MORTADELA ALPRO 400 gr "15/20bultos"' },
    { id: 215, name: '•MORTADELA ALPRO 900 GR "15/20bultos"' },
    { id: 216, name: '•MORTADELA ARICHUNA 1 KILO "11cajas"' },
    { id: 217, name: '•MORTADELA BOLOGÃ‘A 500 GR "10/12bultos"' },
    { id: 218, name: 'MORTADELA CARACAS 900 GR "25/30bultos".' },
    { id: 219, name: '•MORTADELA PLUMROSE 1 KILO "40/45bultos"' },
    { id: 220, name: 'MOSTAZA EUREKA PLASTICA 285 GR "20/21cajas"' },
    { id: 221, name: 'MULTIUSO TULIPAN 1 LITRO "02cajas"' },
    { id: 222, name: 'MULTIUSO TULIPAN 1/2 LITRO "02cajas"' },
    { id: 223, name: '•NATILLA GUARALAC "600UND"' },
    { id: 224, name: '•NATILLA VEGA BOLSA 450 GR "700UND"' },
    { id: 225, name: 'NESTUN BOLSA 225 GR 3 CEREALES "02cajas"' },
    { id: 226, name: 'NUTRIBELLA "02cajas"' },
    { id: 227, name: '•PAN ARABE "800UND"' },
    { id: 228, name: '•PAN DE DIOS "150UND"' },
    { id: 229, name: '•PAN DE GUAYABA "510UND"' },
    { id: 230, name: '•PAN DE HAMBURGUESA X 08 "100UND"' },
    { id: 231, name: '•PAN DE PERRO "50UND"' },
    { id: 232, name: '•PAN DE SANDWICHE AVENA GR "140"' },
    { id: 233, name: '•PAN DE SANDWICHE EL NACIONAL "100UND"' },
    { id: 234, name: '•PAN DE SANDWICHE GR "350UND"' },
    { id: 235, name: '•PAN DE SANDWICHE ZANAHORIA GR140' },
    { id: 236, name: '•PAN DE TUNJA PEQ "820UND"' },
    { id: 237, name: '•PAN SANDWICHE PEQ "280UND"' },
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
    { id: 258, name: '•PASTELITO DE AREQUIPE "120UND"' },
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
    { id: 270, name: '•PIZZA LA CHEVERISIMA GRND "100UND"' },
    { id: 271, name: 'PRESTOBARBA ALLISON /ALMESSI 3 HOJILLA "400UND"' },
    { id: 272, name: 'PRESTOBARBA DORCO X5 "130UND"' },
    { id: 273, name: '•PULPAS DE FRUTA "420UND"' },
    { id: 274, name: '•QUESO 1 KILO "1500/2000"' },
    { id: 275, name: 'QUINCHONCHO 1/2 "167kg"' },
    { id: 276, name: 'REFRESCO GLUP 2 LITROS"20bultos"' },
    { id: 277, name: 'REFRESCO GOLDEN 1/2LTR "40bultos".' },
    { id: 278, name: 'REFRESCO PEPSI 1/2LTR NEGRA "15bultos".' },
    { id: 279, name: 'RIKESA "20bultos"' },
    { id: 280, name: '•SACOS ECOLOGICO "600UND"' },
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
    { id: 317, name: '•SUERO GUARALAC "1100UND"' },
    { id: 318, name: '•SUERO KASERO KO 850 ML "720UND"' },
    { id: 319, name: '•SUERO LA LAJITA "80UND"' },
    { id: 320, name: '•SUERO VEGA "950UND"' },
    { id: 321, name: '•SUERO VEGA PICANTE "80UND"' },
    { id: 322, name: 'TALLARIN ESPECIAL 500 GR "13bultos"' },
    { id: 323, name: '•TAMARINDO "120UND"' },
    { id: 324, name: '•TAMARINDO ETNA "222UND"' },
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
    { id: 344, name: 'TALLARINES CARPRI""' },
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
    'ALEJANDRO ': ['PRESTONARBA','CREAMA MASKIN'],
    'ALIMENTOS VEMESA C,A': ['MARGARINA VEMESA 400 GR "40cajas"', 'MARGARINA KEMY 400 GRS' ,'MAYONESA KEMY "55cajas"'],
    'ALIVE': ['JABON ALIVE 1 KILO GR "100bultos"','PAÑALES BABY FINGER 24 UND','PAPEL ALISOFT 800H * 12' ,'SUAVISANTE ALIVE SOBRE' ,'JABON ALIVE 400 GRS','JABON ALIVE 900 KILO GRS','JABON ALIVE 500 GR "78bultos"', 'SHAMPU ALIVE 350 ML "5cajas"', 'TOALLAS ALIVE DIURNA"".', 'TOALLAS ALIVE NOCTURNA "".', 'TOALLAS HUMEDAS "03bultos" ', 'PAÃ‘ALES BABY FINGER G- XG 10 UND "01bulto"', 'PAÃ‘ALES BABY FINGER GD 16 UND ""', 'PRESTOBARBA DORCO X5 "130UND"'],
    'ASOPORTUGUESA': ['HARINA ARAURIGUA 1 KILO "1050bultos"','HARINA DOÑA EMILIA 900 GRS"' ,  'HARINA DOÑA EMILIA 1 KILO "365bultos"','HARINA DOÑA EMILIA MEZCLA 900 GRS' , 'ARROZ DOÃ‘A EMIIA 900 GMS".'],
    'CAFÉ EN GRANO': ['•CAFÃ‰ EN GRANO 250 GR *40 COROMOTANA "02bultos"', '•CAFÃ‰ EN GRANOS DULCE AMARGO 400GR "04bultos"', '•CAFÃ‰ FRONTINO DE 400 GR "04bultos"'],
    'CAMPESINO': ['LECHE CAMPIÃ‘A DE 400 GR "40bultos"', 'JABON PROTEX 85 GRS ".' ,'CEPILLO DENTAL COLGATE DE NIÑO' ,'CEPILLO DENTAL COLGATE "03cajas"', 'CREMA COLG/TRIP PLAX 60 GR "10cajas"', 'CREMA COLGATE NORMAL 90 GR "05cajas"', 'CREMA COLGATE KIDS 50 GM GRM".', 'DESODORANTE LEIDY TUBO  30 GR "12cajas"', 'JABON PALMOLIVE 85 GR "13cajas".', 'JABON PROTEX 110 GR "14cajas"', 'LAVAP AXION 225 GR "08cajas"', 'TALLARINES CARPRI""'],
    'CAPRI': ['ACEITE DE OLIVA CAPRI 250 ML X 12 UND "15bultos"', 'ACEITE DE OLIVA CAPRI DE 500ML".', 'FIDEO CAPRI 250 GR "13bultos"', 'PASTA CAPRI 1 KILO CORTA AZUL "160bultos"', 'PASTA CAPRI 1 KILO LARGA AZUL "200bultos"'],
    'CEREVEN': ['FORORO VALLE HOND 400 GR "19bultos".', 'LECHE VALLELAC 375GR "130bultos"'],
    'COMERCILIZADORA 2016': ['ATUN PACIFICO 170 GRM ".'],
    'COPOSA': ['MARGARINA MIRASOL 454 GR "46cajas"', 'ACEITE NATUROIL 850 ML "50bultos"'],
    'DEVITA RICARDO': ['AVENA DEVITA 400 GR "90bultos"', 'CARAOTAS D"VITA 400 GR "17bultos"', 'LENTEJAS DEVITA 400 GR "24bultos"', 'MAIZ DE COTUFA DVITA 400 GR "09bultos"', 'AVENA DON JORGE/ 400 GR "25bultos".', 'CAFE CORDILLERA 200 GR "80bultos"', 'CAFÃ‰ CORDILLERA 500 GR "70bultos"'],
    'DIALCA': ['JABON REXONA 110 GR "10cajas"', 'SHAMPU SAVITAL "07cajas"'],
    'DIGILCA': ['CARNE DE SOYA SOY TEX 200 GR "06bultos"'],
    'DIMASSI': ['PAÑALES HUGGUIES * 20 UNID G AZUL "04bulto"', 'PAÑALES HUGGUIES MED "04bultos"', 'TOALLA KOTEX NOCTURNA "30bultos"'],
    'EUREKA': ['MOSTAZA EUREKA PLASTICA 285 GR "20/21cajas"', 'VINAGRE EUREKA 1 LITRO "25bultos"'],
    'GENICA': ['LACTOVISOY COLONA 500GR "02bultos"', 'TWISTY QUESO 200 GR "25cajas"'],
    'IBERIA': ['SALSA INGLESA IBERIA 150CC "15bultos"', 'SOPÃ  SOBRE IBERIA "2cajas"'],
    'INCOSA': ['SARDINA INCOSA TOMATE 170 GR "250bultos"', 'SARDINA INCOSA ACEITE 170 GR ".'],
    'INDUSTRIAS EL INTENTO ': ['ARROZ CONQUISTA 900 GR "52bultos"'],
    'LA ESPECIAL': ['HARINA TRIGO ESPECIAL LEUD 900 GR "150bultos"', 'HARINA TRIGO ESPECIAL TODO USO 900 GR "52bultos"', 'MAYONESA ESPECIAL 445 GR "20cajas"', 'PASTA ESPECIAL CORTA "400bultos"', 'PASTA ESPECIAL LARGA "680bultos"', 'TALLARIN ESPECIAL 500 GR "13bultos"'],
    'LACTEOS SAN SIMON': ['LECHE LIQUIDA SAN SIMON 1 LT "35cajas"', 'LECHE MONTAÃ‘A FRESCA 400 GR "90bultos"'],
    'MAIZALITO': ['CARAOTA MAIZAL400 GR "105bultos"', 'LENTEJAS MAIZAL 400/GR "28bultos"', 'MAIZ DE COTUFA MAIZAL 400 GR "25bultos"', 'FRIJOL PICO NEGRO MAIZALITO*30 ".'],
    'MARIAN DISTRIBUIDORA': ['ATUN PEÃ‘ERO 170 GR VERDE "170bultos".', 'ATUN DIPLOMATICO AZUL 170 GR "185bultos"'],
    'MARY-LORO-': ['ARROZ MARY TRADICIONAL 900 GR ""', 'CREMA ARROZ MARY 450 GR "04bultos"', 'HARINA DE TRIGO MARY 900 GR "55bultos"', 'GALLETA CALEDONIA /250 GR "23UND"', 'GALLETA TIP TOP 80 GR "12cajas"', 'GALLETA CHARMY 216 GR "23bultos"'],
    'MASIAS HARINA ARROZ': ['ARROZ MASIA 900 GR "430bultos"', 'HARINA MASIAS 900 GMS ".'],
    'MISEVEN': ['HARINA KALY PREMIUN ( NUEVA )"110bultos"'],
    'MIXTO FESTIVAL': ['MEGA AROS "30bultos"', 'MEGA BOL""', 'PEPITO CHEEZ PEK 75 GR "16bultos"', 'PEPITO OSTIS 100 GR "15bultos"'],
    'MONDELE INTERNANCIONAL': ['GALLETA CLUB SOCIAL "20cajas"', 'GALLETA OREO 1 TUBO "11cajas"', 'MAYONESA KRAFT 175 GR "10cajas"', 'MAYONESA KRAFT 445 GR "70cajas"', 'GALLETA KRAKER/ HONNY BRAN "16cajas"', 'TANG "50UND"'],
    'MULTINACIONAL DE SABORES': ['REFRESCO GLUP 2 LITROS"20bultos"', 'JUGO YUSTY 1/5 ML "50bultos".'],
    'NATULAC': ['COMPOTA NATULAC MANZANA 186 GR "12bultos"', 'COMPOTA NATULAC PERA 186 GR "11bultos"', 'JUGO NATULAC PERA 250 ML*24".', 'JUGO NATULAC MANZANA 250 ML*24 "55cajas"', 'LECHE CONDENSADA NATULAC 380 ML "08cajas"', 'LECHE CONDENSADA MAITA "25cajas"', 'CHOCO PILO 220 GR "07cajas"'],
    'NESTLE': ['CERELAC BOLSA 400 GR "02cajas"', 'CUBITO MAGGI "05cajas"', 'NESTUN BOLSA 225 GR 3 CEREALES "02cajas"', 'SOPA SOBRE MAGGY "20cajas"', 'GATARINA GATSY 20 KG ""', 'PERRAR DOGOURMENT ADULTO 1/2 KG""', 'PERRAR DOGOURMENT CACHORRO 1/2 KG""'],
    'NUEVA TENDENCIA': ['SALSA CHINA 150GR "13bultos"', 'DIABLITO UNDERWOOD 54 GR "22cajas"'],
    'OTROS PRODUCTOS ': ['ACEITE AGROIL 828 ML "480bultos"','ACEITE GOTA DE ORO' ,'AZUCAR DE JESUS','NUTRIBOY','PASTICHO CAPRI','SALSA FRITZ MAIZ','SALSA FRITZ CHEDDAR','SALSA FRITZ PICANTE','SALSA ROJA MONTE CARMELO' ,'SARDINA VENFOR','AZUCAR KONFI','MAIZORITO SPAAC POOP','LAVAPLATOS TAPA AMARILLA' ,'LECHE VACAMU','TOALLAS NOSOTRAS' ,  'AZUCAR PASTORA "650bultos" ', 'CARAOTA PESADA NEGRAS/ROJAS 500 GR "2600kg"', 'CHOCOLATE TERRY 200GR X24 "11bultos"', 'CLORO TAPA AMARILLA1 LITRO "20bultos"', 'CREMA GALACTIC 75 GR "22cajas"', 'GUISANTES TIGO 300 GR "03cajas"', 'JUGO DEL MONTES 200ML "07cajas".', 'LAVAPLATO ALMESSY 450 GR "02cajas"', 'MAIZ DULCE PAFIA "06cajas "', 'PANELA DULCE 500 gr CON ETIQUETA "25bultos"', 'SUAVITEL SOBRE "35cajas"', 'TOALLAS CONCOR NOCTURNas"05bultos"', 'VINAGRE KEPA GRANDE DE 1 LTS "40bultos"', 'LIMPIA POCETAS MAS "03cajas"', 'SALSA FRITZ PICANTE "3cajas"', 'TOBOS PLASTICO "35UND"', 'QUINCHONCHO 1/2 "167kg"', 'PAPEL CARICIAS DE 600HOJAS".', 'LENTEJAS PESADA 500 GR "1000kg"', '•MORTADELA PLUMROSE 1 KILO "40/45bultos"', 'CLORO ENMANUEL 1 LITRO "14bultos"', 'BOMBILLOS AMARILLO "02bultos"', 'BOMBILLOS LED 15WAT "4bultos"', 'ATUN PACIFICO 170 GRM ".', 'SAL ESMERALDA "22bultos"', 'SAL EN SAL "65bultos"'],
    'PAPELES VENEZOLANO': ['PAPEL /ROSAL 4 ROLL 215 BLANCO "160bultos"', 'PAPEL ROSAL 400 HOJAS "105bultos"', 'PAPEL ROSAL DE 600 HOJAS "105bultos"', 'TOALLIN PAVECA ROSAL TOWELS 24*80 HOJAS "45bulto"', 'SERVILLETA Z PEQUEÃ‘A "45bultos"'],
    'PRODUCTOS 8 DE MARZO': ['AFRECHO 500 GR "07bultos"', 'AVENA 8 DE MARZO 400 GR "10bultos"', 'GRANOLA 8 DE MARZO ""', 'PASTA INTEGRAL 8 D MARZO "07bultos"', 'CAFÃ‰ MATILDE "22bultos"'],
    'PRODUCTOS CARGIL DE VENZ': ['ACEITE VATEL SOYA 1 LITRO "85bultos"', 'ACEITE VATEL SOYA 1/2 LITRO "30bultos"', 'PASTA RONCO DE 500 GR "05bultos"', 'PASTICHO RONCO DE 250 GR "13bultos","ACEITE DE ACEITE VATEL SOYA 800ML"'],
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

// Auto-sync missing products from companyProductMapping to the products array
Object.keys(companyProductMapping).forEach(company => {
    const productNames = companyProductMapping[company];
    productNames.forEach(name => {
        const exists = products.some(p => p.name === name);
        if (!exists) {
            const newId = Math.max(...products.map(p => p.id), 0) + 1;
            const match = name.match(/"(.*?)"|""/);
            const unit = match ? match[1].replace(/\d+/g, '').replace(/[.¿?¿¡]/g, '').trim().split(' ')[0] : '';
            const newProduct = { id: newId, name: name, unit: unit };
            products.push(newProduct);
        }
    });
});

const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
// Eliminar referencias a botones de filtro individuales ya que ahora están centralizados
const companyFiltersContainer = document.getElementById('companyFiltersContainer');
const selectedProductsContainer = document.getElementById('selectedProductsContainer');
const selectedProductsList = document.getElementById('selectedProductsList');

// Pre-procesar productos para la bÃºsqueda de "Pedido Directo"
let directOrderProducts = [];
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
const shareBtn = document.getElementById('shareBtn');
const exportDirectOrderBtn = document.getElementById('exportDirectOrderBtn');
const optionsBtn = document.getElementById('optionsBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarSearch = document.getElementById('sidebarSearch');
const sidebarSelected = document.getElementById('sidebarSelected');
const sidebarAddProduct = document.getElementById('sidebarAddProduct');
const sidebarConfig = document.getElementById('sidebarConfig');
const sidebarExportPDF = document.getElementById('sidebarExportPDF');
const sidebarExportDirectPDF = document.getElementById('sidebarExportDirectPDF');
const sidebarExportDirectOnlyQtyPDF = document.getElementById('sidebarExportDirectOnlyQtyPDF');
const sidebarShare = document.getElementById('sidebarShare');
const clearAllBtn = document.getElementById('clearAllBtn');
const exportDirectOrderOnlyQtyBtn = document.getElementById('exportDirectOrderOnlyQtyBtn');

// Warning modal variables removed
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
const currentOrderSubtitle = document.getElementById('currentOrderSubtitle');
const selectedSearchInput = document.getElementById('selectedSearchInput');

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('show');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('show');
}

// Export visibility function helpers removed (handled by updateUI)


const addResponsablesBtn = document.getElementById('addResponsablesBtn');
const quickConfigOrderBtn = document.getElementById('quickConfigOrderBtn');
const quickConfigDropdown = document.getElementById('quickConfigDropdown');
const responsablesModal = document.getElementById('responsablesModal');
const responsable1Input = document.getElementById('responsable1Input');
const responsable2Input = document.getElementById('responsable2Input');
const cancelResponsablesBtn = document.getElementById('cancelResponsablesBtn');
const confirmResponsablesBtn = document.getElementById('confirmResponsablesBtn');
const orderTypeSelect = document.getElementById('orderTypeSelect');
const clearOrderSelectionBtn = document.getElementById('clearOrderSelectionBtn');


// El botón de opciones y otros elementos ahora están declarados al inicio del script
const exportButtonsContainer = document.getElementById('exportButtonsContainer');

// Variables de estado
let currentQuantity = '';
let currentProduct = null;
let searchTimeout;
let productIdToDelete = null;
let responsables = ['', ''];

function populateCompanyDropdown() {
    const newProductCompany = document.getElementById('newProductCompany');
    if (!newProductCompany) return;

    const companies = Object.keys(companyProductMapping).sort();
    newProductCompany.innerHTML = companies.map(company =>
        `<option value="${company}">${company}</option>`
    ).join('');

    // Seleccionar por defecto 'OTROS PRODUCTOS' (ignorando espacios o mayúsculas)
    const defaultCompany = companies.find(c => c.trim().toUpperCase() === 'OTROS PRODUCTOS');
    if (defaultCompany) {
        newProductCompany.value = defaultCompany;
    }
}
let menuTimeoutId = null;
let customProducts = [];
let deletedProductIds = [];
let selectedOrderType = 'all';
let hasShared = false;

function saveToLocalStorage() {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    localStorage.setItem('responsables', JSON.stringify(responsables));
    localStorage.setItem('customProducts', JSON.stringify(customProducts));
    localStorage.setItem('deletedProducts', JSON.stringify(deletedProductIds));
    localStorage.setItem('selectedOrderType', selectedOrderType);
    localStorage.setItem('hasShared', hasShared);
}

function checkWeeklyReset() {
    const now = new Date();
    // Obtener el domingo más reciente
    const currentSunday = new Date(now);
    currentSunday.setDate(now.getDate() - now.getDay());
    currentSunday.setHours(0, 0, 0, 0);

    const lastReset = localStorage.getItem('lastResetDate');
    const lastResetDate = lastReset ? new Date(lastReset) : null;

    // Si no hay registro o el registro es anterior al domingo más reciente, resetear
    if (!lastResetDate || lastResetDate < currentSunday) {
        selectedProducts = [];
        responsables = [responsables[0] || '', '']; // Preservar Responsable 1, limpiar el resto
        hasShared = false;
        saveToLocalStorage();
        localStorage.setItem('lastResetDate', currentSunday.toISOString());
    }
}

function loadFromLocalStorage() {
    checkWeeklyReset(); // Verificar reset semanal antes de cargar
    const savedSelected = localStorage.getItem('selectedProducts');
    if (savedSelected) selectedProducts = JSON.parse(savedSelected);

    const savedResponsables = localStorage.getItem('responsables');
    if (savedResponsables) responsables = JSON.parse(savedResponsables);

    const savedCustom = localStorage.getItem('customProducts');
    if (savedCustom) {
        customProducts = JSON.parse(savedCustom);
        // Asegurarse de que los productos personalizados se añadan a la lista principal y restaurar asociaciones de empresa
        customProducts.forEach(cp => {
            if (!products.some(p => p.id === cp.id)) {
                products.push(cp);
            }
            if (cp.type === 'directo' && cp.company) {
                if (!companyProductMapping[cp.company]) {
                    companyProductMapping[cp.company] = [];
                }
                if (!companyProductMapping[cp.company].includes(cp.name)) {
                    companyProductMapping[cp.company].push(cp.name);
                }
                if (!directOrderProducts.some(p => p.id === cp.id)) {
                    directOrderProducts.push({ ...cp });
                }
            }
        });
    }

    const savedDeleted = localStorage.getItem('deletedProducts');
    if (savedDeleted) {
        deletedProductIds = JSON.parse(savedDeleted);
        // Filtrar productos eliminados de todas las listas
        products = products.filter(p => !deletedProductIds.includes(p.id));
        customProducts = customProducts.filter(p => !deletedProductIds.includes(p.id));
        selectedProducts = selectedProducts.filter(p => !deletedProductIds.includes(p.id));
        directOrderProducts = directOrderProducts.filter(p => !deletedProductIds.includes(p.id));
    }

    const savedType = localStorage.getItem('selectedOrderType');
    if (savedType) {
        selectedOrderType = savedType;
        applyOrderTypeFilter(selectedOrderType);
    }

    const savedShared = localStorage.getItem('hasShared');
    if (savedShared) {
        hasShared = savedShared === 'true';
        updateUI(); // Sincronizar UI al cargar
    }

    // Actualizar la interfaz después de cargar
    if (responsables[0] || responsables[1]) {
        responsables[1] = ''; // Limpiar Responsable 2 (Cliente) al iniciar
        saveToLocalStorage();
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
    recargo: false,
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
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    const listHtml = sortedList.map(item => {
        const isSelected = selectedProducts.some(p => p.id === item.id);
        const cardClass = isSelected ? 'product-card selected' : 'product-card';
        return `
                    <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm relative group" data-id="${item.id}" data-name="${item.name}">
                        <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800 pr-6">${item.id}. ${item.name}</h2>
                        <button class="delete-product-btn absolute top-2 right-2 text-red-400 hover:text-red-600 hidden group-hover:block transition-colors" data-id="${item.id}" title="Eliminar producto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                `;
    }).join('');

    productList.innerHTML += listHtml;
}

function renderSelectedProducts(productsToRender) {
    const productsToShow = productsToRender !== undefined ? productsToRender : selectedProducts;

    selectedProductsList.innerHTML = '';

    const sortedProducts = [...productsToShow].sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
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
                        <div class="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-lg shadow-md flex justify-between items-center transition-all duration-200 border-2 border-emerald-400 dark:border-emerald-700 cursor-pointer selected-product-card" data-id="${product.id}">
                            <div class="flex-grow info-click-area">
                                <span class="font-medium text-emerald-800 dark:text-emerald-200">${product.name}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-emerald-950 dark:text-emerald-100 info-click-area">${product.quantity} ${product.unit}</span>
                                <button class="delete-button" data-id="${product.id}">Eliminar</button>
                            </div>
                        </div>
                    `;
        }).join('');
        selectedProductsList.innerHTML = selectedHtml;

        // Listener para editar cantidad al hacer clic en la tarjeta
        document.querySelectorAll('.selected-product-card').forEach(card => {
            card.addEventListener('click', (event) => {
                // Si hizo clic en el botón de eliminar, no abrir calculadora
                if (event.target.classList.contains('delete-button')) return;

                const productId = parseInt(card.dataset.id, 10);
                const product = selectedProducts.find(p => p.id === productId);
                if (product) {
                    currentProduct = { ...product };
                    currentQuantity = product.quantity.toString().replace('.', ',');
                    modalProductName.textContent = product.name;
                    updateDisplay();
                    showModal(calculatorModal);
                }
            });
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.id, 10);
                const index = selectedProducts.findIndex(p => p.id === productId);
                if (index !== -1) {
                    selectedProducts.splice(index, 1);
                }
                saveToLocalStorage();
                renderSelectedProducts();
                filterAndRenderProducts();
                refreshCompanyProductViews();
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
    const isAnyFilterActive = filters.selected || filters.panes || filters.polar || filters.directOrder || filters.recargo;
    const searchContainer = document.getElementById('searchContainer');
    const directOrderSearchResultsContainer = document.getElementById('directOrderSearchResultsContainer');

    if (isAnyFilterActive || selectedProducts.length > 0) {
        helpBtn.classList.add('hidden');
    } else {
        helpBtn.classList.remove('hidden');
    }

    if (filters.selected) {
        productList.classList.add('hidden');
        selectedProductsContainer.classList.remove('hidden');
        companyFiltersContainer.classList.add('hidden');
        directOrderSearchResultsContainer.classList.add('hidden');
        searchContainer.classList.add('hidden'); // Ocultar buscador principal
        if (!selectedSearchInput.value.trim()) {
            renderSelectedProducts();
        }
    } else {
        productList.classList.remove('hidden');
        selectedProductsContainer.classList.add('hidden');
        searchContainer.classList.remove('hidden');
    }

    if (filters.directOrder) {
        productList.classList.add('hidden');
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

    // --- SINCRONIZAR FILTROS PRINCIPALES ---
    const mainFilterIds = {
        'all': 'filterAllBtn',
        'panes': 'filterPanesBtn',
        'polar': 'filterPolarBtn',
        'directo': 'filterDirectoBtn'
    };

    // Resetear estilos de todos los main filters
    Object.values(mainFilterIds).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-md');
            btn.classList.add('bg-slate-200', 'dark:bg-slate-700');
        }
    });

    // Activar el correspondiente
    const activeMainBtn = document.getElementById(mainFilterIds[selectedOrderType]);
    if (activeMainBtn) {
        activeMainBtn.classList.remove('bg-slate-200', 'dark:bg-slate-700');
        activeMainBtn.classList.add('bg-emerald-600', 'text-white', 'shadow-md');
    }

    // El contenedor de exportación siempre está visible en el nuevo diseño
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
        baseProducts = products.filter(product => product.name.includes('•'));
    } else if (filters.polar) {
        baseProducts = products.filter(product => product.name.endsWith('.'));
    } else {
        // Si no hay un filtro de categorÃ­a, la base son todos los productos
        baseProducts = [...products];
    }

    // Empty state logic for Pedido General
    if (selectedOrderType === 'all' && !searchTerm) {
        productList.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">Seleccione un tipo de pedido o busque un producto para comenzar.</p>';
        productList.classList.remove('grid', 'sm:grid-cols-2', 'lg:grid-cols-3');
        productList.classList.add('flex', 'flex-col', 'gap-4');
        updateUI();
        return;
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
            const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
            const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        // Vuelve a generar el HTML para los productos de esa empresa, aplicando la clase 'selected' si es necesario
        const productsHtml = companyProducts.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                        <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm relative group" data-id="${item.id}" data-name="${item.name}">
                            <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800 pr-6">${item.id}. ${item.name}</h2>
                            <button class="delete-product-btn absolute top-2 right-2 text-red-400 hover:text-red-600 hidden group-hover:block transition-colors" data-id="${item.id}" title="Eliminar producto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
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
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    if (filteredResults.length > 0) {
        const resultsHtml = filteredResults.map(item => {
            const isSelected = selectedProducts.some(p => p.id === item.id);
            const cardClass = isSelected ? 'product-card selected' : 'product-card';
            return `
                        <div class="${cardClass} flex flex-col items-start w-full bg-gray-50 p-4 rounded-lg shadow-sm relative group" data-id="${item.id}" data-name="${item.name}">
                            <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800 pr-6">${item.name}</h2>
                            <p class="text-xs text-emerald-700 font-semibold mt-1">${item.company}</p>
                            <button class="delete-product-btn absolute top-2 right-2 text-red-400 hover:text-red-600 hidden group-hover:block transition-colors" data-id="${item.id}" title="Eliminar producto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
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
    } else if (value === 'clear') {
        currentQuantity = '';
    } else if (value === 'clear-entry') {
        currentQuantity = '0';
    } else if (value === 'confirm') {
        processCalculation();
    } else if (value === 'decimal') {
        if (!currentQuantity.includes(',')) currentQuantity += ',';
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(value)) {
        if (currentQuantity === '0') currentQuantity = value;
        else currentQuantity += value;
    } else if (value === 'sqr') {
        const val = parseFloat(currentQuantity.replace(',', '.') || '0');
        currentQuantity = (val * val).toString().replace('.', ',');
    } else if (value === 'sqrt') {
        const val = parseFloat(currentQuantity.replace(',', '.') || '0');
        currentQuantity = Math.sqrt(val).toString().replace('.', ',');
    } else if (value === 'inv') {
        const val = parseFloat(currentQuantity.replace(',', '.') || '0');
        if (val !== 0) currentQuantity = (1 / val).toString().replace('.', ',');
    } else if (value === 'plus-minus') {
        const val = parseFloat(currentQuantity.replace(',', '.') || '0');
        currentQuantity = (val * -1).toString().replace('.', ',');
    } else if (value === 'percent') {
        const val = parseFloat(currentQuantity.replace(',', '.') || '0');
        currentQuantity = (val / 100).toString().replace('.', ',');
    } else {
        console.log('Scientific button pressed (no operation defined):', value);
    }
    updateDisplay();
}

const confirmCalcBtn = document.getElementById('confirmCalcBtn');
if (confirmCalcBtn) {
    confirmCalcBtn.addEventListener('click', processCalculation);
}

// Escuchar eventos de teclado físico cuando el modal de la calculadora está abierto
window.addEventListener('keydown', (event) => {
    const calculatorModal = document.getElementById('calculatorModal');
    if (calculatorModal && !calculatorModal.classList.contains('hidden')) {
        const key = event.key;
        
        // Números 0-9
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
            event.preventDefault();
            if (currentQuantity === '0') currentQuantity = key;
            else currentQuantity += key;
            updateDisplay();
        }
        // Coma o punto decimal
        else if (key === ',' || key === '.') {
            event.preventDefault();
            if (!currentQuantity.includes(',')) {
                currentQuantity += ',';
                updateDisplay();
            }
        }
        // Borrar carácter
        else if (key === 'Backspace') {
            event.preventDefault();
            currentQuantity = currentQuantity.slice(0, -1);
            updateDisplay();
        }
        // Limpiar display completo
        else if (key === 'Delete') {
            event.preventDefault();
            currentQuantity = '0';
            updateDisplay();
        }
        // Cancelar / Cerrar
        else if (key === 'Escape') {
            event.preventDefault();
            hideModal(calculatorModal);
            currentQuantity = '';
            currentProduct = null;
        }
        // Guardar y confirmar
        else if (key === 'Enter') {
            event.preventDefault();
            processCalculation();
        }
    }
});

function processCalculation() {
    if (currentQuantity !== '' && currentProduct) {
        const cleanQty = currentQuantity.replace(',', '.');
        const quantity = parseFloat(cleanQty);
        const existingProductIndex = selectedProducts.findIndex(p => p.id === currentProduct.id);

        if (isNaN(quantity) || quantity === 0) {
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
        currentQuantity = '';
        currentProduct = null;
        filterAndRenderProducts();
        refreshCompanyProductViews();
        if (filters.directOrder && searchInput.value) {
            renderDirectOrderSearchResults();
        }
    }
}

function exportToPDF() {
    const searchTerm = searchInput.value.toLowerCase();
    let productsToExport;
    let isExportingAll = false;

    if (filters.panes) {
        productsToExport = products.filter(product => (product.name || "").includes('•') || (product.name || "").includes('•'));
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
            headStyles: { fillColor: [6, 78, 59], textColor: [255, 255, 255], fontStyle: 'bold', halign: 'center', fontSize: 8, cellPadding: 1 },
            styles: { lineColor: [0, 0, 0], lineWidth: 0.1, fontSize: 7.5, valign: 'middle', cellPadding: 1 },
            columnStyles: {
                0: { cellWidth: 70, textColor: [6, 78, 59], fontStyle: 'bold' }, // Nombre en VERDE por defecto
                1: { halign: 'center' },
                2: { halign: 'center' },
                3: { halign: 'center' },
                4: { halign: 'center', fontStyle: 'bold' },
                5: { halign: 'center' }
            },
            didParseCell: function (data) {
                if (data.section === 'body' && data.column.index === 0) {
                    const rowData = tableData[data.row.index];
                    const productName = rowData[0];
                    const isCustom = customProducts.some(cp => {
                        const cleanCpName = cp.name.replace(/[••.-]/g, '').trim().toUpperCase();
                        const cleanRowName = productName.replace(/[••.-]/g, '').trim().toUpperCase();
                        return cleanCpName === cleanRowName;
                    });
                    if (isCustom) {
                        data.cell.styles.textColor = [255, 0, 0]; // ROJO para productos manuales
                    }
                }
            }
        });

        doc.save(`Pedido_FERIA_DEL_ESTE_${day}_${month}.pdf`);
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
        const doc = new jsPDF('p', 'mm', 'legal');

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const dateString = `${day}/${month}/${today.getFullYear()}`;

        const responsablesString = responsables.filter(r => r).join(' - ') || 'SIN ESPECIFICAR';

        function drawHeader(pdfDoc, dateStr, respStr, pageNum) {
            // Fondo amarillo para el header de Responsables
            pdfDoc.setFillColor(253, 224, 71); // Amarillo
            pdfDoc.rect(8, 5, 64, 6, 'F');
            pdfDoc.rect(76, 5, 64, 6, 'F');
            
            // Fondo gris claro para la Fecha
            pdfDoc.setFillColor(241, 245, 249); // Slate-100
            pdfDoc.rect(144, 5, 64, 6, 'F');

            // Dibujar bordes
            pdfDoc.setDrawColor(0, 0, 0);
            pdfDoc.setLineWidth(0.15);
            pdfDoc.rect(8, 5, 64, 6);
            pdfDoc.rect(76, 5, 64, 6);
            pdfDoc.rect(144, 5, 64, 6);

            pdfDoc.setFont('helvetica', 'bold');
            pdfDoc.setFontSize(7.5);
            pdfDoc.setTextColor(0, 0, 0);
            pdfDoc.text('FERIA DEL ESTE', 40, 9.2, { align: 'center' });
            pdfDoc.text(respStr.toUpperCase(), 108, 9.2, { align: 'center' });
            pdfDoc.text(`FECHA: ${dateStr}`, 176, 9.2, { align: 'center' });

            // Barra de título del pedido
            pdfDoc.setFillColor(6, 78, 59); // Verde oscuro Cecosesola
            pdfDoc.rect(8, 13, 200, 4.5, 'F');
            pdfDoc.rect(8, 13, 200, 4.5); // Borde negro
            pdfDoc.setTextColor(255, 255, 255);
            pdfDoc.setFontSize(7.5);
            pdfDoc.text(`PEDIDOS DIRECTO FERIAS F ESTE - PAGINA ${pageNum}`, 108, 16.2, { align: 'center' });
        }

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

        // Asegurar que se exporten todos los productos con cantidad, incluso si no están mapeados a una empresa
        selectedProducts.forEach(sp => {
            if (sp.quantity && sp.quantity != '0' && !allDirectOrderItems.some(item => item.product.id === sp.id)) {
                const product = products.find(p => p.id === sp.id) || sp;
                const dop = directOrderProducts.find(p => p.id === sp.id);
                const company = dop ? dop.company : 'GENERAL';
                allDirectOrderItems.push({ product, company });
            }
        });

        const groupedByCompany = {};
        allDirectOrderItems.forEach(item => {
            const company = item.company || 'GENERAL';
            if (!groupedByCompany[company]) {
                groupedByCompany[company] = [];
            }
            const selectedProd = selectedProducts.find(sp => sp.id === item.product.id);
            const quantity = selectedProd ? selectedProd.quantity : '';
            groupedByCompany[company].push({ product: item.product, quantity });
        });

        function normalizeStr(str) {
            return (str || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toUpperCase().replace(/\s+/g, " ");
        }

        // Definir el orden exacto por columnas según la imagen
        const col1Order = [
            'PRODUCTOS CARGIL DE VENZ',
            'PRODUCTOS 8 DE MARZO',
            'INDUSTRIAS EL INTENTO ',
            'MARY-LORO-',
            'MASIAS HARINA ARROZ',
            'COMERCILIZADORA 2016',
            'MARIAN DISTRIBUIDORA',
            'DEVITA RICARDO',
            'CAFÉ EN GRANO',
            'MAIZALITO',
            'CAPRI',
            'CEREVEN',
            'LA ESPECIAL',
            'ASOPORTUGUESA',
            'GENICA',
            'SALSA GIRALDA',
            'CAMPESINO'
        ];

        const col2Order = [
            'COPOSA',
            'ALIMENTOS VEMESA C,A',
            'AGRO INDUSTRIAS MONTE CARMELO',
            'MONDELE INTERNANCIONAL',
            'SANDY',
            'NESTLE',
            'ALIMENTOS  HEINZ',
            'SUPER DULCES',
            'ALIVE',
            'DIALCA',
            'UNILEVER',
            'ALFONSO RIVAS',
            'PUIG',
            'DIMASSI',
            'SANTONNY',
            'MIXTO FESTIVAL',
            'EUREKA',
            'PAPELES VENEZOLANO'
        ];

        const col3Order = [
            'DIGILCA',
            'INCOSA',
            'PRODUCTOS EL REY',
            'MISEVEN',
            'MULTINACIONAL DE SABORES',
            'ALEJANDRO',
            'IBERIA',
            'MARY',
            'LACTEOS SAN SIMON',
            'NATULAC',
            'VELAS SEÑOR SEÑOR Y POPULARES',
            'NUEVA TENDENCIA',
            'OTROS PRODUCTOS '
        ];

        const normalizedGroupedKeys = {};
        Object.keys(groupedByCompany).forEach(key => {
            normalizedGroupedKeys[normalizeStr(key)] = key;
        });

        const col1Items = [];
        col1Order.forEach(comp => {
            const norm = normalizeStr(comp);
            if (normalizedGroupedKeys[norm]) {
                col1Items.push({ originalKey: normalizedGroupedKeys[norm], company: comp });
                delete normalizedGroupedKeys[norm];
            }
        });

        const col2Items = [];
        col2Order.forEach(comp => {
            const norm = normalizeStr(comp);
            if (normalizedGroupedKeys[norm]) {
                col2Items.push({ originalKey: normalizedGroupedKeys[norm], company: comp });
                delete normalizedGroupedKeys[norm];
            }
        });

        const col3Items = [];
        col3Order.forEach(comp => {
            const norm = normalizeStr(comp);
            if (normalizedGroupedKeys[norm]) {
                col3Items.push({ originalKey: normalizedGroupedKeys[norm], company: comp });
                delete normalizedGroupedKeys[norm];
            }
        });

        // Cualquier empresa no mapeada va a la columna con menos elementos
        Object.keys(normalizedGroupedKeys).forEach(norm => {
            const origKey = normalizedGroupedKeys[norm];
            if (col1Items.length <= col2Items.length && col1Items.length <= col3Items.length) {
                col1Items.push({ originalKey: origKey, company: origKey });
            } else if (col2Items.length <= col1Items.length && col2Items.length <= col3Items.length) {
                col2Items.push({ originalKey: origKey, company: origKey });
            } else {
                col3Items.push({ originalKey: origKey, company: origKey });
            }
        });

        // Configuración compacta de dimensiones
        const columnsX = [8, 76, 144];
        const headerHeight = 3.3;
        const rowHeight = 2.7;
        const spacingBetweenCompanies = 0.4;

        // Paginación por columna
        const col1Pages = [[]];
        let col1CurrentPage = 0;
        let col1CurrentY = 19;
        col1Items.forEach(item => {
            const productsInComp = groupedByCompany[item.originalKey];
            const sectionHeight = headerHeight + (productsInComp.length * rowHeight) + spacingBetweenCompanies;
            if (col1CurrentY + sectionHeight > 350) {
                col1CurrentPage++;
                col1CurrentY = 19;
                col1Pages[col1CurrentPage] = [];
            }
            col1Pages[col1CurrentPage].push(item);
            col1CurrentY += sectionHeight;
        });

        const col2Pages = [[]];
        let col2CurrentPage = 0;
        let col2CurrentY = 19;
        col2Items.forEach(item => {
            const productsInComp = groupedByCompany[item.originalKey];
            const sectionHeight = headerHeight + (productsInComp.length * rowHeight) + spacingBetweenCompanies;
            if (col2CurrentY + sectionHeight > 350) {
                col2CurrentPage++;
                col2CurrentY = 19;
                col2Pages[col2CurrentPage] = [];
            }
            col2Pages[col2CurrentPage].push(item);
            col2CurrentY += sectionHeight;
        });

        const col3Pages = [[]];
        let col3CurrentPage = 0;
        let col3CurrentY = 19;
        col3Items.forEach(item => {
            const productsInComp = groupedByCompany[item.originalKey];
            const sectionHeight = headerHeight + (productsInComp.length * rowHeight) + spacingBetweenCompanies;
            if (col3CurrentY + sectionHeight > 350) {
                col3CurrentPage++;
                col3CurrentY = 19;
                col3Pages[col3CurrentPage] = [];
            }
            col3Pages[col3CurrentPage].push(item);
            col3CurrentY += sectionHeight;
        });

        const maxPages = Math.max(col1Pages.length, col2Pages.length, col3Pages.length);

        for (let p = 0; p < maxPages; p++) {
            if (p > 0) {
                doc.addPage('legal', 'p');
            }
            drawHeader(doc, dateString, responsablesString, p + 1);

            // Dibujar Columna 1
            if (col1Pages[p]) {
                let y = 19;
                col1Pages[p].forEach(item => {
                    const company = item.company;
                    const productsInComp = groupedByCompany[item.originalKey];

                    productsInComp.sort((a, b) => {
                        const nameA = (a.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        const nameB = (b.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        return nameA.localeCompare(nameB);
                    });

                    doc.setFillColor(6, 78, 59); // Verde oscuro
                    doc.rect(columnsX[0], y, 50, headerHeight, 'F');
                    doc.rect(columnsX[0], y, 50, headerHeight);
                    doc.setFillColor(5, 150, 105); // Verde esmeralda
                    doc.rect(columnsX[0] + 50, y, 14, headerHeight, 'F');
                    doc.rect(columnsX[0] + 50, y, 14, headerHeight);

                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(6);
                    doc.setTextColor(255, 255, 255);
                    doc.text(company.substring(0, 36), columnsX[0] + 1.2, y + headerHeight - 0.9);
                    doc.text('PEDIDO F', columnsX[0] + 51, y + headerHeight - 0.9);

                    y += headerHeight;

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(5);
                    doc.setTextColor(0, 0, 0);

                    productsInComp.forEach(pItem => {
                        const product = pItem.product;
                        const qty = pItem.quantity || '';

                        doc.setDrawColor(180, 180, 180);
                        doc.setLineWidth(0.08);
                        doc.rect(columnsX[0], y, 50, rowHeight);
                        doc.rect(columnsX[0] + 50, y, 14, rowHeight);

                        let cleanName = (product.name || "").replace(/^\d+\.\s*/, '');
                        cleanName = cleanName.replace(/[••.-]/g, '').trim();

                        const isPicante = cleanName.toUpperCase().includes('PICANTE');
                        const isCustom = customProducts.some(cp => {
                            const cleanCpName = cp.name.replace(/[••.-]/g, '').trim().toUpperCase();
                            return cleanCpName === cleanName.toUpperCase();
                        });
                        
                        if (isPicante || isCustom) {
                            doc.setTextColor(220, 38, 38);
                            doc.setFont('helvetica', 'bold');
                        } else {
                            doc.setTextColor(0, 0, 0);
                            doc.setFont('helvetica', 'normal');
                        }

                        doc.text(cleanName.substring(0, 42), columnsX[0] + 1.2, y + rowHeight - 0.7);

                        if (qty) {
                            const isSpecialQty = String(qty).toUpperCase().includes('Y') || 
                                                 String(qty).toUpperCase() === 'NO' || 
                                                 String(qty).toUpperCase().includes('P ') ||
                                                 String(qty).toUpperCase() === 'PICANTE';
                            if (isSpecialQty) {
                                doc.setFillColor(254, 240, 138);
                                doc.rect(columnsX[0] + 50, y, 14, rowHeight, 'F');
                                doc.rect(columnsX[0] + 50, y, 14, rowHeight);
                            }

                            doc.setFont('helvetica', 'bold');
                            doc.setFontSize(5.5);
                            if (String(qty).toUpperCase() === 'NO' || String(qty).toUpperCase() === 'PICANTE' || isPicante) {
                                doc.setTextColor(220, 38, 38);
                            } else {
                                doc.setTextColor(0, 0, 0);
                            }
                            doc.text(String(qty), columnsX[0] + 51.5, y + rowHeight - 0.7);
                        }

                        y += rowHeight;
                    });

                    y += spacingBetweenCompanies;
                });
            }

            // Dibujar Columna 2
            if (col2Pages[p]) {
                let y = 19;
                col2Pages[p].forEach(item => {
                    const company = item.company;
                    const productsInComp = groupedByCompany[item.originalKey];

                    productsInComp.sort((a, b) => {
                        const nameA = (a.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        const nameB = (b.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        return nameA.localeCompare(nameB);
                    });

                    doc.setFillColor(6, 78, 59);
                    doc.rect(columnsX[1], y, 50, headerHeight, 'F');
                    doc.rect(columnsX[1], y, 50, headerHeight);
                    doc.setFillColor(5, 150, 105);
                    doc.rect(columnsX[1] + 50, y, 14, headerHeight, 'F');
                    doc.rect(columnsX[1] + 50, y, 14, headerHeight);

                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(6);
                    doc.setTextColor(255, 255, 255);
                    doc.text(company.substring(0, 36), columnsX[1] + 1.2, y + headerHeight - 0.9);
                    doc.text('PEDIDO F', columnsX[1] + 51, y + headerHeight - 0.9);

                    y += headerHeight;

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(5);
                    doc.setTextColor(0, 0, 0);

                    productsInComp.forEach(pItem => {
                        const product = pItem.product;
                        const qty = pItem.quantity || '';

                        doc.setDrawColor(180, 180, 180);
                        doc.setLineWidth(0.08);
                        doc.rect(columnsX[1], y, 50, rowHeight);
                        doc.rect(columnsX[1] + 50, y, 14, rowHeight);

                        let cleanName = (product.name || "").replace(/^\d+\.\s*/, '');
                        cleanName = cleanName.replace(/[••.-]/g, '').trim();

                        const isPicante = cleanName.toUpperCase().includes('PICANTE');
                        if (isPicante) {
                            doc.setTextColor(220, 38, 38);
                            doc.setFont('helvetica', 'bold');
                        } else {
                            doc.setTextColor(0, 0, 0);
                            doc.setFont('helvetica', 'normal');
                        }

                        doc.text(cleanName.substring(0, 42), columnsX[1] + 1.2, y + rowHeight - 0.7);

                        if (qty) {
                            const isSpecialQty = String(qty).toUpperCase().includes('Y') || 
                                                 String(qty).toUpperCase() === 'NO' || 
                                                 String(qty).toUpperCase().includes('P ') ||
                                                 String(qty).toUpperCase() === 'PICANTE';
                            if (isSpecialQty) {
                                doc.setFillColor(254, 240, 138);
                                doc.rect(columnsX[1] + 50, y, 14, rowHeight, 'F');
                                doc.rect(columnsX[1] + 50, y, 14, rowHeight);
                            }

                            doc.setFont('helvetica', 'bold');
                            doc.setFontSize(5.5);
                            if (String(qty).toUpperCase() === 'NO' || String(qty).toUpperCase() === 'PICANTE' || isPicante) {
                                doc.setTextColor(220, 38, 38);
                            } else {
                                doc.setTextColor(0, 0, 0);
                            }
                            doc.text(String(qty), columnsX[1] + 51.5, y + rowHeight - 0.7);
                        }

                        y += rowHeight;
                    });

                    y += spacingBetweenCompanies;
                });
            }

            // Dibujar Columna 3
            if (col3Pages[p]) {
                let y = 19;
                col3Pages[p].forEach(item => {
                    const company = item.company;
                    const productsInComp = groupedByCompany[item.originalKey];

                    productsInComp.sort((a, b) => {
                        const nameA = (a.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        const nameB = (b.product.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                        return nameA.localeCompare(nameB);
                    });

                    doc.setFillColor(6, 78, 59);
                    doc.rect(columnsX[2], y, 50, headerHeight, 'F');
                    doc.rect(columnsX[2], y, 50, headerHeight);
                    doc.setFillColor(5, 150, 105);
                    doc.rect(columnsX[2] + 50, y, 14, headerHeight, 'F');
                    doc.rect(columnsX[2] + 50, y, 14, headerHeight);

                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(6);
                    doc.setTextColor(255, 255, 255);
                    doc.text(company.substring(0, 36), columnsX[2] + 1.2, y + headerHeight - 0.9);
                    doc.text('PEDIDO F', columnsX[2] + 51, y + headerHeight - 0.9);

                    y += headerHeight;

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(5);
                    doc.setTextColor(0, 0, 0);

                    productsInComp.forEach(pItem => {
                        const product = pItem.product;
                        const qty = pItem.quantity || '';

                        doc.setDrawColor(180, 180, 180);
                        doc.setLineWidth(0.08);
                        doc.rect(columnsX[2], y, 50, rowHeight);
                        doc.rect(columnsX[2] + 50, y, 14, rowHeight);

                        let cleanName = (product.name || "").replace(/^\d+\.\s*/, '');
                        cleanName = cleanName.replace(/[••.-]/g, '').trim();

                        const isPicante = cleanName.toUpperCase().includes('PICANTE');
                        if (isPicante) {
                            doc.setTextColor(220, 38, 38);
                            doc.setFont('helvetica', 'bold');
                        } else {
                            doc.setTextColor(0, 0, 0);
                            doc.setFont('helvetica', 'normal');
                        }

                        doc.text(cleanName.substring(0, 42), columnsX[2] + 1.2, y + rowHeight - 0.7);

                        if (qty) {
                            const isSpecialQty = String(qty).toUpperCase().includes('Y') || 
                                                 String(qty).toUpperCase() === 'NO' || 
                                                 String(qty).toUpperCase().includes('P ') ||
                                                 String(qty).toUpperCase() === 'PICANTE';
                            if (isSpecialQty) {
                                doc.setFillColor(254, 240, 138);
                                doc.rect(columnsX[2] + 50, y, 14, rowHeight, 'F');
                                doc.rect(columnsX[2] + 50, y, 14, rowHeight);
                            }

                            doc.setFont('helvetica', 'bold');
                            doc.setFontSize(5.5);
                            if (String(qty).toUpperCase() === 'NO' || String(qty).toUpperCase() === 'PICANTE' || isPicante) {
                                doc.setTextColor(220, 38, 38);
                            } else {
                                doc.setTextColor(0, 0, 0);
                            }
                            doc.text(String(qty), columnsX[2] + 51.5, y + rowHeight - 0.7);
                        }

                        y += rowHeight;
                    });

                    y += spacingBetweenCompanies;
                });
            }
        }

        doc.save(`Pedido_Directo_FERIA_DEL_ESTE_${day}_${month}.pdf`);
        showMessage('PDF Directo exportado en hoja Oficio con éxito.', '#86efac', '#166534');
    } catch (error) {
        console.error(error);
        showMessage('Error al exportar: ' + error.message, '#fca5a5', '#7f1d1d');
    }
}

function exportDirectOrderOnlyQtyToPDF() {
    if (selectedProducts.length === 0) {
        showMessage('No hay productos con cantidad para exportar.', '#fca5a5', '#7f1d1d');
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
        doc.text('PEDIDO DIRECTO (SOLO CANTIDAD) FERIA ESTE', 105, 12, { align: 'center' });

        doc.setFontSize(8);
        doc.text(`FECHA: ${dateString}`, 15, 20);
        doc.text(`RESPONSABLES: ${responsablesString}`, 15, 24);

        const allDirectOrderItems = [];
        Object.keys(companyProductMapping).forEach(company => {
            const productNames = companyProductMapping[company];
            productNames.forEach(name => {
                const product = products.find(p => p.name === name);
                if (product) {
                    const isSelectedWithQty = selectedProducts.find(sp => sp.id === product.id && sp.quantity && sp.quantity != '0');
                    if (isSelectedWithQty) {
                        allDirectOrderItems.push({ product, company });
                    }
                }
            });
        });

        // Asegurar que se exporten todos los productos con cantidad, incluso si no están mapeados a una empresa
        selectedProducts.forEach(sp => {
            if (sp.quantity && sp.quantity != '0' && !allDirectOrderItems.some(item => item.product.id === sp.id)) {
                const product = products.find(p => p.id === sp.id) || sp;
                const dop = directOrderProducts.find(p => p.id === sp.id);
                const company = dop ? dop.company : 'GENERAL';
                allDirectOrderItems.push({ product, company });
            }
        });

        if (allDirectOrderItems.length === 0) {
            showMessage('No hay productos con cantidad para exportar.', '#fca5a5', '#7f1d1d');
            return;
        }

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
            headStyles: { fillColor: [16, 185, 129], textColor: [255, 255, 255], fontStyle: 'bold', halign: 'center', fontSize: 8, cellPadding: 1 },
            styles: { lineColor: [0, 0, 0], lineWidth: 0.1, fontSize: 7.5, valign: 'middle', cellPadding: 1 },
            columnStyles: {
                0: { cellWidth: 70, textColor: [6, 78, 59], fontStyle: 'bold' },
                1: { halign: 'center' },
                2: { halign: 'center' },
                3: { halign: 'center' },
                4: { halign: 'center', fontStyle: 'bold' },
                5: { halign: 'center' }
            },
            didParseCell: function (data) {
                if (data.section === 'body' && data.column.index === 0) {
                    const rowData = tableData[data.row.index];
                    const productName = rowData[0];
                    const isCustom = customProducts.some(cp => {
                        const cleanCpName = cp.name.replace(/[••.-]/g, '').trim().toUpperCase();
                        const cleanRowName = productName.replace(/[••.-]/g, '').trim().toUpperCase();
                        return cleanCpName === cleanRowName;
                    });
                    if (isCustom) {
                        data.cell.styles.textColor = [255, 0, 0]; // ROJO para productos manuales
                    }
                }
            }
        });

        doc.save(`Pedido_Directo_Solo_Cantidad_FERIA_DEL_ESTE_${day}_${month}.pdf`);
        showMessage('PDF exportado con éxito.', '#86efac', '#166534');
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
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    sortedProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('bg-emerald-50', 'p-3', 'rounded-lg', 'flex', 'justify-between', 'items-center', 'text-sm');
        item.innerHTML = `
                    <span class="font-medium text-emerald-800">${product.name}</span>
                    <span class="font-bold text-emerald-950">${product.quantity} ${product.unit}</span>
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
    if (selectedProducts.length === 0) {
        showMessage('No hay productos seleccionados para compartir.', '#fca5a5', '#7f1d1d');
        return;
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    const responsablesString = responsables.filter(r => r).join(' - ');

    let message = `*PEDIDO DE FERIA ESTE*\n`;
    message += `*FECHA:* ${dateString}\n`;
    if (responsablesString) {
        message += `*RESPONSABLES:* ${responsablesString}\n`;
    }
    message += `\n*PRODUCTOS:*\n`;

    const sortedProducts = [...selectedProducts].sort((a, b) => {
        const nameA = a.name.replace(/[•.-]/g, '').trim().toUpperCase();
        const nameB = b.name.replace(/[•.-]/g, '').trim().toUpperCase();
        return nameA.localeCompare(nameB);
    });

    sortedProducts.forEach(product => {
        message += `• ${product.name}: *${product.quantity} ${product.unit}*\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    const groupUrl = "https://chat.whatsapp.com/J3VaVBlAHKB0eDpjR48jhj?mode=hqctcla";

    // Abrir WhatsApp directamente
    window.open(whatsappUrl, '_blank');

    hasShared = true;
    saveToLocalStorage();
    updateUI();
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
    const deleteBtn = event.target.closest('.delete-product-btn');
    if (deleteBtn) {
        event.stopPropagation();
        productIdToDelete = parseInt(deleteBtn.dataset.id, 10);
        showModal(document.getElementById('deleteProductModal'));
        return; // Prevent opening calculator modal
    }

    const productCard = event.target.closest('.product-card');
    if (productCard) {
        const productId = parseInt(productCard.dataset.id, 10);
        const productName = productCard.dataset.name;

        const productWithUnit = products.find(p => p.id === productId);

        currentProduct = { id: productId, name: productName, unit: productWithUnit.unit };

        modalProductName.textContent = `Producto: ${productName}`;

        const existingProduct = selectedProducts.find(p => p.id === productId);
        if (existingProduct) {
            currentQuantity = String(existingProduct.quantity).replace('.', ',');
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

// Sidebar Logic
optionsBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    openSidebar();
});

sidebarOverlay.addEventListener('click', closeSidebar);

sidebarSearch.addEventListener('input', () => {
    searchInput.value = sidebarSearch.value;
    // Disparar evento de input en el buscador principal para que se ejecute la lógica existente
    searchInput.dispatchEvent(new Event('input'));
});

// El botón sidebarAll ha sido eliminado para coincidir con el diseño solicitado

sidebarAll.addEventListener('click', () => {
    closeSidebar();
});

sidebarPanes.addEventListener('click', () => {
    closeSidebar();
});

sidebarPolar.addEventListener('click', () => {
    closeSidebar();
});

sidebarDirect.addEventListener('click', () => {
    closeSidebar();
});

sidebarSelected.addEventListener('click', () => {
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = false;
    filters.selected = true;
    updateUI();
    updateSidebarActive('sidebarSelected');
    closeSidebar();
});

sidebarConfig.addEventListener('click', () => {
    closeSidebar();
    responsable1Input.value = responsables[0];
    responsable2Input.value = responsables[1];
    orderTypeSelect.value = selectedOrderType;
    showModal(responsablesModal);
});


function updateSidebarActive(activeId) {
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if (item.id === activeId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Interceptar applyOrderTypeFilter para actualizar el sidebar
const originalApplyOrderTypeFilter = applyOrderTypeFilter;
applyOrderTypeFilter = function (type) {
    originalApplyOrderTypeFilter(type);
    const sidebarIds = {
        'all': 'sidebarAll',
        'panes': 'sidebarPanes',
        'polar': 'sidebarPolar',
        'directo': 'sidebarDirect'
    };
    updateSidebarActive(sidebarIds[type] || '');
};

// --- LISTENERS PARA FILTROS PRINCIPALES (ELIMINADOS) ---

sidebarAddProduct.addEventListener('click', () => {
    closeSidebar();
    newProductName.value = '';
    
    // Autoseleccionar el tipo según el filtro actual
    let defaultType = selectedOrderType === 'all' ? 'normal' : selectedOrderType;
    if (defaultType === 'recargo') defaultType = 'normal'; // fallback si hay filtro raro
    newProductType.value = defaultType;
    
    // Disparar evento para mostrar/ocultar selector de empresas
    newProductType.dispatchEvent(new Event('change'));
    
    populateCompanyDropdown(); // Llenar el dropdown de empresas
    showModal(addProductModal);
});

// Eventos de compartir y exportar
sidebarShare.addEventListener('click', () => {
    closeSidebar();
    shareToWhatsApp();
});

sidebarExportPDF.addEventListener('click', () => {
    closeSidebar();
    exportToPDF();
});

sidebarExportDirectPDF.addEventListener('click', () => {
    closeSidebar();
    exportDirectOrderToPDF();
});

sidebarExportDirectOnlyQtyPDF.addEventListener('click', () => {
    closeSidebar();
    exportDirectOrderOnlyQtyToPDF();
});

exportDirectOrderOnlyQtyBtn.addEventListener('click', () => {
    exportDirectOrderOnlyQtyToPDF();
});




selectedSearchInput.addEventListener('input', () => {
    const searchTerm = selectedSearchInput.value.toLowerCase();
    const filteredSelected = selectedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderSelectedProducts(filteredSelected);
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

function backToList() {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    selectedOrderType = 'all';
    saveToLocalStorage();

    filters.selected = false;
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = false;
    const searchResultsContainer = document.getElementById('directOrderSearchResultsContainer');
    if (searchResultsContainer) {
        searchResultsContainer.classList.add('hidden');
        searchResultsContainer.innerHTML = '';
    }
    updateSidebarActive(''); // Desactivar todo en el sidebar al volver
    filterAndRenderProducts();
}


// Los event listeners de los botones de filtro individuales han sido eliminados

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
                const nameA = (a.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                const nameB = (b.name || "").replace(/[••.-]/g, '').trim().toUpperCase();
                return nameA.localeCompare(nameB);
            });

            const productsHtml = companyProducts.map(item => {
                const isSelected = selectedProducts.some(p => p.id === item.id);
                const cardClass = isSelected ? 'product-card selected' : 'product-card';
                return `
                            <div class="${cardClass} flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm relative group" data-id="${item.id}" data-name="${item.name}">
                                <h2 class="product-name text-sm sm:text-lg font-medium text-gray-800 pr-6">${item.id}. ${item.name}</h2>
                                <button class="delete-product-btn absolute top-2 right-2 text-red-400 hover:text-red-600 hidden group-hover:block transition-colors" data-id="${item.id}" title="Eliminar producto">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        `;
            }).join('');
            productsContainer.innerHTML = productsHtml;
        } else {
            productsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500 text-lg">No hay productos para esta empresa.</p>';
        }
    }
});

// Listener para el nuevo diseño de la calculadora
const calcGrid = document.querySelector('.calc-grid');
if (calcGrid) {
    calcGrid.addEventListener('click', handleCalculatorClick);
}

if (exportExcelBtn) exportExcelBtn.addEventListener('click', exportToPDF);
if (shareBtn) shareBtn.addEventListener('click', shareToWhatsApp);
if (exportDirectOrderBtn) exportDirectOrderBtn.addEventListener('click', exportDirectOrderToPDF);
if (exportDirectOrderOnlyQtyBtn) exportDirectOrderOnlyQtyBtn.addEventListener('click', exportDirectOrderOnlyQtyToPDF);

// Beforeunload logic removed


// Unused warning modal event listeners removed



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
const addProductModal = document.getElementById('addProductModal');
const cancelAddProductBtn = document.getElementById('cancelAddProductBtn');
const confirmAddProductBtn = document.getElementById('confirmAddProductBtn');
const newProductName = document.getElementById('newProductName');
const newProductType = document.getElementById('newProductType');
const newProductCompany = document.getElementById('newProductCompany');
const companySelectionDiv = document.getElementById('companySelectionDiv');

// Eventos para el modal de confirmación de eliminación de producto
const deleteProductModal = document.getElementById('deleteProductModal');
const cancelDeleteProductBtn = document.getElementById('cancelDeleteProductBtn');
const confirmDeleteProductBtn = document.getElementById('confirmDeleteProductBtn');

if (cancelDeleteProductBtn) {
    cancelDeleteProductBtn.addEventListener('click', () => {
        hideModal(deleteProductModal);
        productIdToDelete = null;
    });
}

if (confirmDeleteProductBtn) {
    confirmDeleteProductBtn.addEventListener('click', () => {
        if (productIdToDelete !== null) {
            // Añadir a lista de eliminados
            if (!deletedProductIds.includes(productIdToDelete)) {
                deletedProductIds.push(productIdToDelete);
            }
            
            // Eliminar de listas activas
            products = products.filter(p => p.id !== productIdToDelete);
            customProducts = customProducts.filter(p => p.id !== productIdToDelete);
            directOrderProducts = directOrderProducts.filter(p => p.id !== productIdToDelete);
            selectedProducts = selectedProducts.filter(p => p.id !== productIdToDelete);
            
            saveToLocalStorage();
            
            // Actualizar vista
            filterAndRenderProducts();
            renderSelectedProducts();
            refreshCompanyProductViews();
            
            showMessage('Producto eliminado correctamente.', '#86efac', '#166534');
        }
        hideModal(deleteProductModal);
        productIdToDelete = null;
    });
}

if (deleteProductModal) {
    deleteProductModal.addEventListener('click', (event) => {
        if (event.target.id === 'deleteProductModal') {
            hideModal(deleteProductModal);
            productIdToDelete = null;
        }
    });
}


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

    const newProduct = { id: newId, name: name, unit: unit, type: type };
    if (type === 'directo') {
        newProduct.company = newProductCompany.value;
    }

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
clearAllBtn.addEventListener('click', () => {
    if (selectedProducts.length === 0) return;
    // Eliminación directa sin modal
    selectedProducts = [];
    hasShared = false;
    saveToLocalStorage();
    renderSelectedProducts();
    filterAndRenderProducts();
    refreshCompanyProductViews();
});

function applyOrderTypeFilter(type) {
    // Reset all related filters
    filters.panes = false;
    filters.polar = false;
    filters.directOrder = false;
    filters.selected = false; // Asegurar que volvemos a la lista general al cambiar de tipo

    if (type === 'panes') {
        filters.panes = true;
    } else if (type === 'polar') {
        filters.polar = true;
    } else if (type === 'directo') {
        filters.directOrder = true;
    } else if (type === 'recargo') {
        filters.recargo = true;
    }

    filterAndRenderProducts();
    updateUI();

    // Update subtitle
    if (currentOrderSubtitle) {
        const typeNames = {
            'all': 'Pedido General',
            'panes': 'Pedido de Panes',
            'polar': 'La Polar',
            'directo': 'Pedido Directo',
            'recargo': 'Recargo'
        };
        currentOrderSubtitle.textContent = typeNames[type] || 'Pedido General';
    }
}

// Eventos para el botón de configurar pedido rápido
if (quickConfigOrderBtn && quickConfigDropdown) {
    quickConfigOrderBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        quickConfigDropdown.classList.toggle('hidden');
    });

    quickConfigDropdown.querySelectorAll('[data-order-type]').forEach(button => {
        button.addEventListener('click', (event) => {
            const type = button.getAttribute('data-order-type');
            selectedOrderType = type;
            applyOrderTypeFilter(type);
            saveToLocalStorage();
            quickConfigDropdown.classList.add('hidden');
            
            const typeNames = {
                'all': 'Pedido General',
                'panes': 'Pedido de Panes (Cava)',
                'polar': 'La Polar',
                'directo': 'Pedido Directo'
            };
            showMessage(`Tipo de pedido: ${typeNames[type] || type}`, '#86efac', '#166534');
        });
    });

    document.addEventListener('click', (event) => {
        if (!quickConfigOrderBtn.contains(event.target) && !quickConfigDropdown.contains(event.target)) {
            quickConfigDropdown.classList.add('hidden');
        }
    });
}

// Eventos para el modal de responsables
addResponsablesBtn.addEventListener('click', () => {
    responsable1Input.value = responsables[0];
    responsable2Input.value = responsables[1];
    orderTypeSelect.value = selectedOrderType;
    showModal(responsablesModal);
});

cancelResponsablesBtn.addEventListener('click', () => {
    hideModal(responsablesModal);
});

confirmResponsablesBtn.addEventListener('click', () => {
    const r1 = responsable1Input.value.trim();
    const r2 = responsable2Input.value.trim();

    if (!r2) {
        showMessage('El RESPONSABLE 2 es obligatorio para iniciar.', '#fca5a5', '#7f1d1d');
        return;
    }

    responsables[0] = r1;
    responsables[1] = r2;
    selectedOrderType = orderTypeSelect.value;

    applyOrderTypeFilter(selectedOrderType);

    hideModal(responsablesModal);
    saveToLocalStorage();
    showMessage('Configuración actualizada con éxito.', '#86efac', '#166534');
});

clearOrderSelectionBtn.addEventListener('click', () => {
    selectedOrderType = 'all';
    orderTypeSelect.value = 'all';
    applyOrderTypeFilter('all');
    hasShared = false;
    hideExportButtons();

    hideModal(responsablesModal);
    saveToLocalStorage();
    showMessage('Selección de pedido quitada.', '#fca5a5', '#991b1b');
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

// El menú de opciones anterior ha sido reemplazado por el sidebar

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

// Abrir modal de responsables al iniciar y poblar datos iniciales
window.addEventListener('load', () => {
    responsable1Input.value = responsables[0] || '';
    responsable2Input.value = ''; // Siempre vacío al iniciar
    orderTypeSelect.value = selectedOrderType || 'all';
    showModal(responsablesModal);
});