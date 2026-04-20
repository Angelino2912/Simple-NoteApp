    function addnote() {
        let namauser = document.getElementById("Nameuser").value;
        let note = document.getElementById("noteList").value;

        if (namauser == "" || note == "") {
            alert("Isi dulu nama dan notenya!!!!!!!!!!!");
            return;
        }
        let table = document.getElementById("notesList");
        let row = table.insertRow();

        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)

        cell1.textContent = namauser;
        cell2.textContent = note;

        document.getElementById("Nameuser").value="";
        document.getElementById("noteList").value = "";
        }