function DNAStrand(dna){
    let sequence = { //create an object that establishes the relationship between pairs
        "A" : "T",
        "T" : "A",
        "G" : "C",
        "C" : "G"
    }
    
        return dna.replace (/A|T|G|C/g, function(matched){ //replace matches as described in the sequence object
        return sequence[matched]
        }
        )}