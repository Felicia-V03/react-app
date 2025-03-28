// const BookList = [

//   {
//     "title": "The fellowship of the ring",
//     "author": "J.R.R Tolkien",
//     "pages": 432,
//     "genre": "fantasy",
//     "desc": "Följ Frodo Baggins och hans följeslagare när de ger sig ut på en farofylld resa för att förstöra en ondskefull ring och rädda Midgård från undergång."
//   },
//   {
//     "title": "Harry Potter and the Philosopher's Stone",
//     "author": "J.K. Rowling",
//     "pages": 320,
//     "genre": "fantasy",
//     "desc": "Utforska den magiska världen tillsammans med Harry Potter när han börjar sin resa på Hogwarts skola för häxkonster och trolldom och upptäcker sanningen om sin arv."
//   },
//   {
//     "title": "To Kill a Mockingbird",
//     "author": "Harper Lee",
//     "pages": 281,
//     "genre": "fiction",
//     "desc": "I en sömnig småstad i Alabama utforskar Scout Finch och hennes bror Jems oskuldsfulla världsbild när deras far, advokaten Atticus Finch, försvarar en oskyldig svart man anklagad för våldtäkt."
//   },
//   {
//     "title": "1984",
//     "author": "George Orwell",
//     "pages": 328,
//     "genre": "dystopian",
//     "desc": "George Orwells klassiska dystopiska roman skildrar en totalitär framtid där övervakning och kontroll är normen, och där en ensam rebell kämpar mot systemet för frihet och sanning."
//   },
//   {
//     "title": "Pride and Prejudice",
//     "author": "Jane Austen",
//     "pages": 279,
//     "genre": "romance",
//     "desc": "Följ Elizabeth Bennet när hon navigerar genom klassstrukturer och romantiska trassigheter i 1800-talets England, och upptäck den tidlösa kärlekshistorien mellan henne och den stolta Mr. Darcy."
//   },
//   {
//     "title": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "pages": 180,
//     "genre": "fiction",
//     "desc": "Förälska dig i 1920-talets glittrande New York, där Jay Gatsby, en mystisk och rik gentleman, lockar Nick Carraway in i en värld av kärlek, svek och förlorade drömmar."
//   },
//   {
//     "title": "The Catcher in the Rye",
//     "author": "J.D. Salinger",
//     "pages": 277,
//     "genre": "fiction",
//     "desc": "Följ den tonåriga anti-hjälten Holden Caulfield när han utforskar alienation och identitet i en värld som han känner sig främmande gentemot, i denna ikoniska berättelse om ungdom och rastlöshet."
//   },
//   {
//     "title": "The Hobbit",
//     "author": "J.R.R. Tolkien",
//     "pages": 310,
//     "genre": "fantasy",
//     "desc": "Bli med på ett äventyr genom Midgård med den unga hobbiten Bilbo Baggins, när han ansluter sig till trollkarlen Gandalf och en grupp dvärgar för att återta en stulen skatt från draken Smaug."
//   },
//   {
//     "title": "The Hunger Games",
//     "author": "Suzanne Collins",
//     "pages": 374,
//     "genre": "dystopian",
//     "desc": "I en framtid där barn tvingas tävla till döds i en brutal verklighetsshow, följer vi Katniss Everdeen när hon står upp mot orättvisor och kämpar för att överleva i en värld av desperation och överflöd."
//   },
//   {
//     "title": "The Lord of the Rings: The Two Towers",
//     "author": "J.R.R. Tolkien",
//     "pages": 352,
//     "genre": "fantasy",
//     "desc": "Fortsätt den episka resan i J.R.R. Tolkiens mäktiga fantasyvärld när kriget om Midgård intensifieras och Frodo och Sam fortsätter sin farliga färd mot Mordor för att förstöra den en gång för alla."
//   },
//   {
//     "title": "The Da Vinci Code",
//     "author": "Dan Brown",
//     "pages": 454,
//     "genre": "mystery",
//     "desc": "Dyk ner i en virvelvind av hemligheter och intriger när symbolologen Robert Langdon och kryptologen Sophie Neveu följer ledtrådar genom Europa för att lösa en mystisk mordgåta med kopplingar till historiens största hemligheter."
//   },
//   {
//     "title": "The Girl with the Dragon Tattoo",
//     "author": "Stieg Larsson",
//     "pages": 672,
//     "genre": "mystery",
//     "desc": "Följ journalisten Mikael Blomkvist och den unika hackaren Lisbeth Salander när de tillsammans gräver djupt i en gammal familjehistoria och avslöjar mörka hemligheter i denna spännande kriminalroman."
//   },
//   {
//     "title": "Gone with the Wind",
//     "author": "Margaret Mitchell",
//     "pages": 1037,
//     "genre": "historical fiction",
//     "desc": "Följ Scarlett O'Hara genom det amerikanska inbördeskriget och rekonstruktionen av Södern när hon kämpar för kärlek och överlevnad i denna episka berättelse om passion och förlust."
//   },
//   {
//     "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//     "author": "C.S. Lewis",
//     "pages": 208,
//     "genre": "fantasy",
//     "desc": "Stig in i garderoben och upptäck den fantastiska världen av Narnia, där fyra syskon möter magiska varelser och tillsammans med lejonet Aslan kämpar mot den onda Vita Häxan."
//   },
//   {
//     "title": "The Hitchhiker's Guide to the Galaxy",
//     "author": "Douglas Adams",
//     "pages": 216,
//     "genre": "science fiction",
//     "desc": "Häng med på en galen resa genom rymden med den jordiske Arthur Dent och hans udda vänner när de navigerar genom universum med hjälp av den galaktiska resehandboken."
//   },
//   {
//     "title": "The Alchemist",
//     "author": "Paulo Coelho",
//     "pages": 197,
//     "genre": "fiction",
//     "desc": "Följ den unga fåraherden Santiago när han följer sitt hjärta och söker sin personliga legend i denna inspirerande berättelse om mod, kärlek och självupptäckt."
//   },
//   {
//     "title": "The Book Thief",
//     "author": "Markus Zusak",
//     "pages": 552,
//     "genre": "historical fiction",
//     "desc": "I Nazityskland stjäl den unga Liesel Meminger böcker och hittar tröst i orden under andra världskriget, i denna gripande berättelse om vänskap och mänsklighetens styrka."
//   },
//   {
//     "title": "Brave New World",
//     "author": "Aldous Huxley",
//     "pages": 288,
//     "genre": "dystopian",
//     "desc": "Aldous Huxleys visionära dystopi utforskar en värld där människor kontrolleras genom droger och genetisk manipulation, och där en ensam rebell ifrågasätter samhällets normer och värderingar."
//   },
//   {
//     "title": "The Road",
//     "author": "Cormac McCarthy",
//     "pages": 287,
//     "genre": "post-apocalyptic",
//     "desc": "I en ödelagd värld kämpar en far och son för överlevnad och hopp när de vandrar genom en landskap av aska och förtvivlan i denna gripande berättelse om kärlek och uthållighet."
//   },
//   {
//     "title": "The Picture of Dorian Gray",
//     "author": "Oscar Wilde",
//     "pages": 253,
//     "genre": "gothic fiction",
//     "desc": "Följ Dorian Gray när han säljer sin själ för evig ungdom och skönhet, och utforska de destruktiva konsekvenserna av narcissism och moralisk förfall i Oscar Wildes klassiska roman."
//   },
//   {
//     "title": "The Shining",
//     "author": "Stephen King",
//     "pages": 447,
//     "genre": "horror",
//     "desc": "Dyk ner i mörkret med Stephen Kings ikoniska skräckberättelse när familjen Torrance konfronterar sina värsta mardrömmar på det isolerade Overlook Hotel, där onda krafter lurar i skuggorna."
//   },
//   {
//     "title": "The Kite Runner",
//     "author": "Khaled Hosseini",
//     "pages": 371,
//     "genre": "historical fiction",
//     "desc": "Utforska vänskap, förlåtelse och försoning när Amir återvänder till sitt krigshärjade hemland Afghanistan för att konfrontera sitt förflutna och rädda sin barndomsvän i denna gripande berättelse."
//   },
//   {
//     "title": "The Night Circus",
//     "author": "Erin Morgenstern",
//     "pages": 387,
//     "genre": "fantasy",
//     "desc": "Stig in i en magisk cirkus som endast dyker upp på natten och följ de unga magikerna Celia och Marco när de dras in i en farlig tävling i denna förtrollande berättelse om kärlek och magi."
//   },
//   {
//     "title": "Sapiens: A Brief History of Humankind",
//     "author": "Yuval Noah Harari",
//     "pages": 443,
//     "genre": "non-fiction",
//     "desc": "Utforska mänsklighetens evolution och historia från de tidigaste dagarna till modern tid i denna tankeväckande och omvälvande bok, som tar läsaren på en resa genom årtusenden av kulturell och biologisk utveckling."
//   },
//   {
//     "title": "The Martian",
//     "author": "Andy Weir",
//     "pages": 369,
//     "genre": "science fiction",
//     "desc": "Följ astronauten Mark Watney när han kämpar för överlevnad på Mars efter att ha lämnats kvar av sin besättning, och upplev en spännande historia om envishet och mänsklig uppfinningsrikedom."
//   }
// ]

// export default BookList;

import Books from '../books.json';
import BookItem from './BookItem.jsx';

function BookStore() {
  return (
      <div className="bookStore">
              <div className="book-list">
                  {Books.map((book, index) => (
                  <BookItem key={index} book={book} />
                  ))}
              </div>
      </div>
  );
}

export default BookStore;