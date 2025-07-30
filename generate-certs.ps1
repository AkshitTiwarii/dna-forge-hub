# PowerShell script to generate all certificates from CSV data
$csvData = @"
Name,Email,Certificate_Path
Riya Nagpal,riyanagpal9c@gmail.com,certificates/Riya_Nagpal.png
Rupal Mittal,rupalmittal02@gmail.com,certificates/Rupal_Mittal.png
Anurag Sehrawat,anuragsehrawat25@gmail.com,certificates/Anurag_Sehrawat.png
Aditya Kumar Singh,adityas4328q@gmail.com,certificates/Aditya_Kumar_Singh.png
Bhoomi Srivstav,bhoomisrivastava2023@gmail.com,certificates/Bhoomi_Srivstav.png
Ayush Yadav,raoayush496@gmail.com,certificates/Ayush_Yadav.png
Keshav,keshavsingh8298609953@gmail.com,certificates/Keshav.png
Akshit Tiwari,akshittiwari29@gmail.com,certificates/Akshit_Tiwari.png
Armaan Singh,akgod0101@gmail.com,certificates/Armaan_Singh.png
Deepansu,Deepanshu1484s@gmail.com,certificates/Deepansu.png
Mayank Sharma,sharmamayank5051@gmail.com,certificates/Mayank_Sharma.png
Saksham Didi,sakshamdidi7@gmail.com,certificates/Saksham_Didi.png
Priyanshu Rawat,priyanshurawat374@gmail.com,certificates/Priyanshu_Rawat.png
Rashmi Kumari,rashmi.23082006@gmail.com,certificates/Rashmi_Kumari.png
Bhavya,bhavyakumar.2506@gmail.com,certificates/Bhavya.png
Nitin,nskashver@gmail.co,certificates/Nitin.png
Nitin Sharma,noniponi4605@gmail.com,certificates/Nitin_Sharma.png
Shivaansh Byahut,shivanshbyahut3@gmail.com,certificates/Shivaansh_Byahut.png
Ajay Chauhan,ajay69chauahan@gmail.com,certificates/Ajay_Chauhan.png
Bobby Gupta,bobbyg92500@gmail.com,certificates/Bobby_Gupta.png
Anshuman,apoint200@gmail.com,certificates/Anshuman.png
Mukul Dutta,mukuldutta2006@gmail.com,certificates/Mukul_Dutta.png
Shobhit Babu,shreekisan575@gmail.com,certificates/Shobhit_Babu.png
Jatin,kjatin1806@gmail.com,certificates/Jatin.png
Nitin,nitinhinvar@gmail.com,certificates/Nitin2.png
Prince Kumar,princeverma918@gmail.com,certificates/Prince_Kumar.png
Jyoti Pant,jyotipant614@gmail.com,certificates/Jyoti_Pant.png
Mayank,Mayankkothari15206@gmail.com,certificates/Mayank.png
Kumar Vaibhav Sir,vaibhavs3387@gmail.com,certificates/Kumar_Vaibhav_Sir.png
Avinash Kumar Yadav,24-cse-aiml-011avinash@eitfaridabad.co.in,certificates/Avinash_Kumar_Yadav.png
Nitesh Yadav,Yashrroy04@gmail.com,certificates/Nitesh_Yadav.png
Amitesh Kumar Singh,kamitesh468@gmail.com,certificates/Amitesh_Kumar_Singh.png
Ranjit,Ram05101973@gmail.com,certificates/Ranjit.png
Mandeep,Mk2977172@gmail.com,certificates/Mandeep.png
Aryan Sahu,aryaan.saahu@gmail.com,certificates/Aryan_Sahu.png
Krish Dadwal,kd02122005@gmail.com,certificates/Krish_Dadwal.png
Aaryan Phogaat,aaryanphogat25@gmail.com,certificates/Aaryan_Phogaat.png
Avinash Kumar,avinashkum9899@gmail.com,certificates/Avinash_Kumar.png
Ajay Kumar,honestybhai57@gmail.com,certificates/Ajay_Kumar.png
Chirag,pc3132006@gmail.com,certificates/Chirag.png
Daksh Bist,landire21@gmail.com,certificates/Daksh_Bist.png
Chirag Sharma,chiragsharma1165@gmail.com,certificates/Chirag_Sharma.png
Alameen Fioz,alameenfiroz077@gmail.com,certificates/Alameen_Fioz.png
Harmanjot Singh,Harmanjot4714@gmail.com,certificates/Harmanjot_Singh.png
Aashish Dagar,Nfsaashish@gmail.com,certificates/Aashish_Dagar.png
Ananta Agarwal,drananta1120@gmail.com,certificates/Ananta_Agarwal.png
Aditya Choubey,aditya.choubey.soe@gmail.com,certificates/Aditya_Choubey.png
Krishna Ojha,krishnasoft201@gmail.com,certificates/Krishna_Ojha.png
Kusum Thakur,kusumthakur2219@gmail.com,certificates/Kusum_Thakur.png
Manisha Kumari,manishakmanu5788@gmail.com,certificates/Manisha_Kumari.png
Onkar,ghugeonkar0@gmail.com,certificates/Onkar.png
Anshika Garg,garganshika0410@gmail.com,certificates/Anshika_Garg.png
Devansh Mishra,mishradevansh308@gmail.com,certificates/Devansh_Mishra.png
Khushi Singh Rajput,khushisrajput024@gmail.com,certificates/Khushi_Singh_Rajput.png
Raman,ramanantil447@gmail.com,certificates/Raman.png
Harshial Rawat,rawatking137@gmail.com,certificates/Harshial_Rawat.png
Haiqa Batool,haiqabatool33@gmail.com,certificates/Haiqa_Batool.png
Kalhara Thabrew,kalharathabrew0@gmail.com,certificates/Kalhara_Thabrew.png
Amandi Lochana,amalochanavbv@gmail.com,certificates/Amandi_Lochana.png
Wanya Sajjad,wanyasajjad305@gmail.com,certificates/Wanya_Sajjad.png
Dilathma Vithana,dilsw2511@gmail.com,certificates/Dilathma_Vithana.png
Yash Kumar,yashohlan0203@gmail.com,certificates/Yash_Kumar.png
Sambhav Narang,sambhavnarang04@gmail.com,certificates/Sambhav_Narang.png
Ayushi,ayushijain12@gmail.com,certificates/Ayushi.png
Deepika,deepikasharma10@gmail.com,certificates/Deepika.png
Dishika Gupta,Dishikag2025@gmail.com,certificates/Dishika_Gupta.png
Munasinghe Arachchige Lithuni Chathma,Lithunimunasinghe1@gmail.com,certificates/Munasinghe_Arachchige_Lithuni_Chathma.png
Chinmay Narayan Sahoo,chinmaynarayansahoo.5682@gmail.com,certificates/Chinmay_Narayan_Sahoo.png
Shivansh Mittal,shivanshcollege2@gmail.com,certificates/Shivansh_Mittal.png
Pratham Chhabra,prathamchhabra388@gmail.com,certificates/Pratham_Chhabra.png
Pravin,pravinjanan33@gmail.com,certificates/Pravin.png
Mitali Raj,mitalikashyap2007@gmail.com,certificates/Mitali_Raj.png
Udbhav,snojkumar968@gmail.com,certificates/Udbhav.png
Samkit Jain,samkitjain1812@gmail.com,certificates/Samkit_Jain.png
Sujal Hegde,sujalhegde2006@gmail.com,certificates/Sujal_Hegde.png
Sujan Gowda M,sujangowda567@gmail.com,certificates/Sujan_Gowda_M.png
Himanshu,sainihk0049@gmail.com,certificates/Himanshu.png
Himanshu Sorout,hsorout001@gmail.com,certificates/Himanshu_Sorout.png
Brajesh Kumar,bk117134@gmail.com,certificates/Brajesh_Kumar.png
Manish Kumar,manishberiwal4@gmail.com,certificates/Manish_Kumar.png
Abhinav Kumar,Abhinavdoc54321@gmail.com,certificates/Abhinav_Kumar.png
Prajyot,prajyotkumar2003@gmail.com,certificates/Prajyot.png
Bhavishya,bhavishyarathee72@gmail.com,certificates/Bhavishya.png
Preeti Adhikari,adhikaripreeti099@gmail.com,certificates/Preeti_Adhikari.png
Vinisha,Vinishaninekar@gmail.com,certificates/Vinisha.png
Samiksha Bajoria,samikshabajoria2006@gmail.com,certificates/Samiksha_Bajoria.png
Roshini A,roshinialagu05@gmail.com,certificates/Roshini_A.png
Pooja,kaushikpooja0444@gmail.com,certificates/Pooja.png
Shreya Mishra,1mishra.palak9696@gmail.com,certificates/Shreya_Mishra.png
Arin Chaudhry,arinchaudhry2005@gmail.com,certificates/Arin_Chaudhry.png
Anuj,anujkhan0123@gmail.com,certificates/Anuj.png
Shravan Ningot,ningotshravan@gmail.com,certificates/Shravan_Ningot.png
Ahad Hasnenali Bharucha,ahadbharucha@gmail.com,certificates/Ahad_Hasnenali_Bharucha.png
Darsani V,darsaniv75@gmail.com,certificates/Darsani_V.png
Sanchi Verma,sanchiverma1202@gmail.com,certificates/Sanchi_Verma.png
Vorugu Pallavi,vpallavi566@gmail.com,certificates/Vorugu_Pallavi.png
Gokul Raj J,jgokulraj011@gmail.com,certificates/Gokul_Raj_J.png
Srinivasu D,sreesreenivaas666@gmail.com,certificates/Srinivasu_D.png
Sabarna K B,sabarna.23cse@kongu.edu,certificates/Sabarna_K_B.png
Khushboo Jainwal,kushboojainwal@gmail.com,certificates/Khushboo_Jainwal.png
Shobha Waknis,srwaknis@yahoo.co.in,certificates/Shobha_Waknis.png
Gazi Wahab,gaziwahab58@gmail.com,certificates/Gazi_Wahab.png
Aparna Aggarwal,aggarwalaparna73@gmail.com,certificates/Aparna_Aggarwal.png
Amit Kumar,amitprajapati.jnv@gmail.com,certificates/Amit_Kumar.png
Deepak Kumar,deepakkbaghel0111@gmail.com,certificates/Deepak_Kumar.png
Anjali,ak20170064983@gmail.com,certificates/Anjali.png
Sujith M,cbssujith@gmail.com,certificates/Sujith_M.png
Cherala Varshith,varshith0304@gmail.com,certificates/Cherala_Varshith.png
Sahil Ali,sahilali233310@gmail.com,certificates/Sahil_Ali.png
Hassan Raza,raxhaproductions@gmail.com,certificates/Hassan_Raza.png
Prathamesh Lokhande,lokhandeprathmesh334@gmail.com,certificates/Prathamesh_Lokhande.png
Kshitij Ganesh Jagtap,kshitijjagtap699@gmail.com,certificates/Kshitij_Ganesh_Jagtap.png
K N Evan Perera,evanonmail@gmail.com,certificates/K_N_Evan_Perera.png
Varsha,varshasingh82401@gmail.com,certificates/Varsha.png
Tanmay,tanmaysr109@gmail.com,certificates/Tanmay.png
Vikas Pandey,vk.ptrust7860@gmail.com,certificates/Vikas_Pandey.png
Haran,harunoragaisa@gmail.com,certificates/Haran.png
Ld Vendat,Leeladharmessi4991@gmail.com,certificates/Ld_Vendat.png
Anunay Pandey,anunaypandey115@gmail.com,certificates/Anunay_Pandey.png
Subham Kumar,shubhamkumar13082004@gmail.com,certificates/Subham_Kumar.png
Priyansh Bhatnagar,priyanshbhatnagar3@gmail.com,certificates/Priyansh_Bhatnagar.png
Nikunj Bindra,s24cseu1403@bennett.edu.in,certificates/Nikunj_Bindra.png
Divyshresth Vishwakarma,ognikhil18@gmail.com,certificates/Divyshresth_Vishwakarma.png
Simran Gupta,sg7534680@gmail.com,certificates/Simran_Gupta.png
Tanishka Vashishth,tanishka.vashishth@gmail.com,certificates/Tanishka_Vashishth.png
Pasumarthy Laxmi Veera Bhadra Rao,pbhadra815@gmail.com,certificates/Pasumarthy_Laxmi_Veera_Bhadra_Rao.png
Daksh Sood,dakshsood464@gmail.com,certificates/Daksh_Sood.png
Josyabhatla Venkata Tripura Harinya,jvtharinya@gmail.com,certificates/Josyabhatla_Venkata_Tripura_Harinya.png
Ashutosh Kumar,ashutoshrazz707@gmail.com,certificates/Ashutosh_Kumar.png
Nitish,nitishyadav9678@gmail.com,certificates/Nitish.png
Yogesh Rana,Yogeshrana123456789@gmail.com,certificates/Yogesh_Rana.png
Megha Jadhav,milindjadhav87048@gmail.com,certificates/Megha_Jadhav.png
Mehraj Anjum,merajanjum998@gmail.com,certificates/Mehraj_Anjum.png
Hiral Jain,jhiral961@gmail.com,certificates/Hiral_Jain.png
Lakshya Marodia,lakshyamarodia@gmail.com,certificates/Lakshya_Marodia.png
Suryansh Saxena,suryansh18082006@gmail.com,certificates/Suryansh_Saxena.png
Sanjana,sanjsharma144@gmail.com,certificates/Sanjana.png
Pratyush Ranjan,pushutheplatipus7183@gmail.com,certificates/Pratyush_Ranjan.png
Ishant Jangra,ishantj1985@gmail.com,certificates/Ishant_Jangra.png
Ritu Kumari Saraswat,saraswatritu826@gmail.com,certificates/Ritu_Kumari_Saraswat.png
Tushar,tusharmendiratta20@gmail.com,certificates/Tushar.png
Toshika Verma,toshikaverma9906@gmail.com,certificates/Toshika_Verma.png
Kamal Kumar,kamalsharma.8.2006@gmail.com,certificates/Kamal_Kumar.png
Garv Malhotra,malhotragarv810@gmail.com,certificates/Garv_Malhotra.png
Zahara Tahniyat,zaarashaikh239@gmail.com,certificates/Zahara_Tahniyat.png
Zaara Tahniyat,zaarashaikh440@gmail.com,certificates/Zaara_Tahniyat.png
Sahil Sharma,sahilsharmaas2006@gmail.com,certificates/Sahil_Sharma.png
Mayank Kawatra,mayankkawatra08@gmail.com,certificates/Mayank_Kawatra.png
Kaushik Kumar,kaushikkumar2205@gmail.com,certificates/Kaushik_Kumar.png
Tripti,t2696292@gmail.com,certificates/Tripti.png
Rashid Khan Khalil Khan Pathan,pathanabrar290@gmail.com,certificates/Rashid_Khan_Khalil_Khan_Pathan.png
Vardhan Kadtala,kadtalavardhan@gmail.com,certificates/Vardhan_Kadtala.png
Mani Rastogi,harishrastogi918@gmail.com,certificates/Mani_Rastogi.png
Neha Goyal,ngoel0877@gmail.com,certificates/Neha_Goyal.png
Varad Dakle,daklevarad@gmail.com,certificates/Varad_Dakle.png
Piyush Singh,cyberstudent200@gmail.com,certificates/Piyush_Singh.png
Ashutosh Yadav,yadav31ashutosh@gmail.com,certificates/Ashutosh_Yadav.png
Prateek Kumar Dwivedi,prateek.dwivedi.cs28@iilm.edu,certificates/Prateek_Kumar_Dwivedi.png
Krishna,kroy55073@gmail.com,certificates/Krishna.png
Twinkle,twinkle141106@gmail.com,certificates/Twinkle.png
Shruti Patel,shrutipatel5977@gmail.com,certificates/Shruti_Patel.png
Rakesh Kumar Jha,rjha27075@gmail.com,certificates/Rakesh_Kumar_Jha.png
Anjali,am4008382@gmail.com,certificates/Anjali2.png
Riya Jain,rj302304@gmail.com,certificates/Riya_Jain.png
Harsh Choudhary,hc000269@gmail.com,certificates/Harsh_Choudhary.png
Saran Soomro,soomrosara882@gmail.com,certificates/Saran_Soomro.png
Allah Bachaie Soomro,allahbachaie386@gmail.com,certificates/Allah_Bachaie_Soomro.png
Surya Prakash,sp6970193@gmail.com,certificates/Surya_Prakash.png
Ayesha Imran,mybestversion381@gmail.com,certificates/Ayesha_Imran.png
Himal Jayamitha Samaranayaka,himaljayamitha2853@gmail.com,certificates/Himal_Jayamitha_Samaranayaka.png
Aryan Baveja,aryanbavejaofficial@gmail.com,certificates/Aryan_Baveja.png
D.H.M.Manodya Piyumal Premasiri,manodyapiyumal17@gmail.com,certificates/DHMManodya_Piyumal_Premasiri.png
Muhammad Hassan Ali,bsse24038@itu.edu.pk,certificates/Muhammad_Hassan_Ali.png
Mohamed Nafais Nashath Rashidha,nashathrashidha@gmail.com,certificates/Mohamed_Nafais_Nashath_Rashidha.png
Mrithulaa H,mrithulaah@gmail.com,certificates/Mrithulaa_H.png
Peeyush Singh,irohitsingh1155@gmail.com,certificates/Peeyush_Singh.png
Ayush Verma,mahi.211102@gmail.com,certificates/Ayush_Verma.png
Pranav Sethi,pranav11sethi2006@gmail.com,certificates/Pranav_Sethi.png
Aayush,aayushwork9812@gmail.coma,certificates/Aayush.png
Shivam Sharma,Shivamsharma11qq@gmail.com,certificates/Shivam_Sharma.png
Raghav Agrawal,raghavagrawal7213@gmail.com,certificates/Raghav_Agrawal.png
Ujjwal,ujjwalmishraa24@gmail.com,certificates/Ujjwal.png
Peeyush Tiwari,tiwari.peeyush2006@gmail.com,certificates/Peeyush_Tiwari.png
Tarush Singla,tarushsingla23@gmail.com,certificates/Tarush_Singla.png
Ojam Srivastava,ojamsrivastava05@gmail.com,certificates/Ojam_Srivastava.png
Rishi Kumar,rishimail3012@gmail.com,certificates/Rishi_Kumar.png
Kokkanti Sreekeerthana,kokkantisreekeerthana65@gmail.com,certificates/Kokkanti_Sreekeerthana.png
Vaishnavi Mittal,mittalvaishnavi2929@gmail.com,certificates/Vaishnavi_Mittal.png
Devansh Arjariya,devansharjariya08@gmail.com,certificates/Devansh_Arjariya.png
Rishu Singh,rrishusingh2004@gmail.com,certificates/Rishu_Singh.png
Garvit Arora,23cs14@lingayasvidyapeeth.edu.in,certificates/Garvit_Arora.png
Shakti Kumar,shaktik971834@gmail.com,certificates/Shakti_Kumar.png
Anala Vijayalakshmi,analayshnaviyadav@gmail.com,certificates/Anala_Vijayalakshmi.png
A. V. Preethi,andrapreethi710@gmail.com,certificates/A_V_Preethi.png
Gayathri Syamanaboyina,gayathri.syamanaboyina@gmail.com,certificates/Gayathri_Syamanaboyina.png
Jahnavi,jahnavikarnati666@gmail.com,certificates/Jahnavi.png
Poojitha Nuteti,poojinuteti@gmail.com,certificates/Poojitha_Nuteti.png
Sunaina Pawar,pawarnaina0789@gmail.com,certificates/Sunaina_Pawar.png
Raghuvaran D,raghuvarandamodaran2002@gmail.com,certificates/Raghuvaran_D.png
Vishal Kumar Goyal,vishalgupta123bro@gmail.com,certificates/Vishal_Kumar_Goyal.png
Tanushree Dhawan,tanushree.dhawan2024@gmail.com,certificates/Tanushree_Dhawan.png
Abdullah Nasir,rose131sgd@gmail.com,certificates/Abdullah_Nasir.png
Shivam Kumar,shi22052004@gmail.com,certificates/Shivam_Kumar.png
Pallavi,ammuyadav837@gmail.com,certificates/Pallavi.png
Mohd Faiz,faizofficial979@gmail.com,certificates/Mohd_Faiz.png
Kanika Budhiraja,kanikabudhiraja.xb@gmail.com,certificates/Kanika_Budhiraja.png
Mr Manish,manishk05908@gmail.com,certificates/Mr_Manish.png
Deepak Pandey,deepakpandeyy94@gmail.com,certificates/Deepak_Pandey.png
Bhumika Bindal,6002bhum1ka@gmail.com,certificates/Bhumika_Bindal.png
Dharmendra Kumar,dharmop123@gmail.com,certificates/Dharmendra_Kumar.png
Aman Kumar,aman482289@gmail.com,certificates/Aman_Kumar.png
"@

# Parse CSV and generate certificates
$lines = $csvData -split "`n" | Select-Object -Skip 1
$certificates = @()
$count = 0

foreach ($line in $lines) {
    if ($line.Trim() -ne "") {
        $parts = $line -split ","
        if ($parts.Length -eq 3) {
            $count++
            $certificates += @{
                id = "$count"
                recipientName = $parts[0].Trim()
                recipientEmail = $parts[1].Trim()
                certificatePath = $parts[2].Trim()
                eventName = "DNA Lead Community Event"
                issueDate = "2025-07-20"
                title = "Certificate of Participation"
                description = "Successfully completed DNA Lead Community Event"
                type = "certificate"
                category = "certificate"
                certificateId = "DNA2025-{0:D3}" -f $count
            }
        }
    }
}

Write-Host "Generated $count certificates"
