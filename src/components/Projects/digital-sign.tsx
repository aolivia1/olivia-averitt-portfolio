function DigitalSign() {
    return(
        <main className="project-page">
            <h1>&gt; DIGITAL SIGN</h1>

            <section>
                <h3>OVERVIEW</h3>
                <p>
                    Designed and implemented a digital display system using 
                    combinational logic and FPGA hardware. The project focused on
                    developing custom seven-segment display decoders and using 
                    digital logic to control displayed characters.
                </p>

            </section>
            
            <section>
                <h3>&gt; PROJECT REQUIREMENTS</h3>
                <p>
                    Developed a custom character set and corresponding binary
                    representations for display output. 
                </p>

                <p>
                    Designed the required logic for converting binary input values 
                    into seven-segment display patterns and implemented the resulting
                    combinational circuits.
                </p>
            </section>

            <section>
                <h3>&gt; IMPLEMENTATION</h3>
                <p>
                   Designed truth tables and simplified Boolean logic to determine 
                   the required output for each segment of the display.
                </p>

                <p>
                    Implemented and simulated the resulting circuit in Quartus 
                    before programming the design onto a DE 10-Lite board to verifying 
                    that the hardware output matched the simulated design.
                </p>
            </section>

            <section>
                <h3>&gt; HARDWARE</h3>
                <p>
                    Configured the FPGA's seven-segment displays to represent the 
                    required character sequences.
                </p>

                <p>
                    Tested the physical implementation on the DE 10-Lite board to verifying 
                    that the hardware output matched the simulated design.
                </p>
            </section>

            <section>
                <h3>&gt; TECHNICAL SKILLS</h3>
                <p>
                    Verilog • Combinational Logic • Truth Tables • Boolean Logic
                    • Karnaugh Maps • Sevn-Segment Displays • FPGA Design • Quartus Prime 
                    • DE 10-Lite 
                </p>
            </section>

            <section>
                <h3>&gt; ENGINEERING FOCUS</h3>
                <p>
                    Digital Systems • FPGA Design • Combinational 
                    Circuit Design • Hardware Implementation
                </p>
            </section>

            <section>
                <h3>&gt; WHAT I LEARNED</h3>
                <p>
                    Developed a stronger understanding of how Boolean logic and combinational 
                    circuits can be translated into functional hardware. This project 
                    strengthened my ability to move from a logical design and truth table to a 
                    simulated circuit and ultimately a working FPGA implementation.
                </p>
            </section>

            <a 
            href="/olivia-averitt-portfolio/#projects"
            className="about-button"
            >
             ← BACK TO PROJECTS    
            </a>
            
        </main>
        
    );
}
export default DigitalSign;