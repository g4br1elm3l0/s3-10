function position(first, second, last) {
    let competidores = [first, second, last]

    for (let i = 0; i < 3; i++) {
        if (competidores[i] == "daniel") {

            if (i == 0) {
                break;
            }
            else {
                aux = competidores[i - 1];
                competidores[i - 1] = competidores[i];
                competidores[i] = aux
            }

        }


        return competidores;

    }
}