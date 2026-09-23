<script setup>
</script>

<template>
    <v-container max-width="100%">
        
        <v-row>
           <v-col>
            <v-carousel cycle hide-delimiter>
                <v-carousel-item src="/Images/Image1.jpg" cover></v-carousel-item>
                <v-carousel-item src="/Images/Image2.jpg" cover></v-carousel-item>
                <v-carousel-item src="/Images/Image3.jpg" cover></v-carousel-item>
                <v-carousel-item src="/Images/Image4.jpg" cover></v-carousel-item>
            </v-carousel>
           </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col>
            <v-card>
                <v-card-title>Welcome to Uhai Hospital</v-card-title>
                <v-card-text class="text-body-large">We provide compassionate, reliable, and high-quality healthcare for individuals and families. Our experienced medical professionals use modern facilities and patient-centered approaches to deliver comprehensive services in a safe and welcoming environment. From routine checkups to specialized treatment, we are committed to supporting your health and wellbeing at every stage.
                </v-card-text>
                <v-card-text class="text-body-large">Your health is our priority. We provide quality, compassionate healthcare through experienced professionals, modern facilities, and personalized services for every patient.
                </v-card-text> 
            </v-card>
             </v-col>
        </v-row>
    </v-container>
    
    <!--clinic-->
    <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300" color="primary">
                    <v-img src="lab.jpg" cover></v-img>
                    <v-card-title> Laboratory Services</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300" color="primary">
                    <v-img src="maternity.jpg" cover></v-img>
                    <v-card-title> Maternity Clinic</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

           <v-col md="3">
                <v-card width="300" color="primary">
                    <v-img src="physio.jpg" cover></v-img>
                    <v-card-title> Physiotherapy Services</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300" color="primary">
                    <v-img src="Dental.jpg" cover></v-img>
                    <v-card-title> Dental Clinic</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

        </v-row>
    </v-container>

    <!--Footer-->
    <v-container max-width="100%" class="mt-10 bg-secondary">
        <v-row>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest news, health tips, and hospital updates delivered to your inbox.</v-card-text>
                    <v-text-field v-model="inputValue" label="Email address" outlined class="ma-4"> 
                    <template v-slot:append-inner>
                        <v-btn color="primary">Subscribe</v-btn>
                    </template>
                    </v-text-field>
                    <div class="text-center">
                        <p>Follow us on:   </p>
                        <v-icon icon="mdi-instagram"></v-icon>
                         <v-icon icon="mdi-twitter"></v-icon>
                          <v-icon icon="mdi-facebook"></v-icon>
                        
                    </div>    
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            The Madaraka Hospital
                        </p>
                        <p>123, Main STreet Madaraka,Nairobi</p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +254712345678
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                                info@madarakahospital.com
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Quick Links</v-card-title>
                    <v-card-text>About Us</v-card-text>
                    <v-card-text>Clinics</v-card-text>
                    <v-card-text>Find a Doctor</v-card-text>
                    <v-card-text>News and Events</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>