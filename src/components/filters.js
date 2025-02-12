import number_categories from "./number_categories";

export default function filters() {
  return `
        <div>
           <div>Search By SUM total</div>
           <div>
            <input />
           </div> 
        </div>   
        <div>
           <div>Browse By Category</div>
           <div>
            ${number_categories()}
           </div> 
        </div>   
        <div>
           <div>Browse By Pricing</div>
           <div>
            <div>0-500</div>
            <div>500-1000</div>
            <div>1000-2000</div>
            <div>2000-4000</div>
            <div>4000-8000</div>
            <div>8000-16000</div>
            <div>16000 - above</div>
           </div> 
        </div>   
    `;
}
