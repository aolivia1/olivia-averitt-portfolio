function BranchControl() {
    return(
        <main className="project-page">
            <h1>&gt; BRANCH CONTROL</h1>

            <section>
                <h3>OVERVIEW</h3>
                <p>
                    Expanded a single-cycle Simple Computer CPU by implementing 
                    conditional branch control using Verilog.
                </p>

                <p> 
                    The project focused on modifying the processor's control logic 
                    to allow the Program Counter to change based on the result of a 
                    specified condition.
                </p>
            </section>
            
            <section>
                <h3>&gt; PROJECT REQUIREMENTS</h3>
                <p>
                    Implemented the BRNN - Branch on Not Negative instruction while 
                    maintaining the functionality of the existing Simple Computer 
                    instruction set.
                </p>

                <p>
                    The branch operation required the processor to evaluate the 
                    negative status of a register and determine whether execution 
                    should continue sequentially or branch to a new program 
                    location.
                </p>
            </section>

            <section>
                <h3>&gt; IMPLEMENTATION</h3>
                <p>
                   Modified the Program Counter control logic to support conditional 
                   branching in addition to normal instruction sequencing and jump 
                   operations.
                </p>

                <p>
                    Implemented the required instruction decoding and control signals 
                    to determine when a branch should occur and calculate the resulting 
                    program address using the branch offset.
                </p>
            </section>

            <section>
                <h3>&gt; HARDWARE</h3>
                <p>
                    Implemented and tested the completed processor design on the DE 10-Lite 
                    FPGA development board to verify that the branch-control functionality 
                    operated correctly in hardware.
                </p>
            </section>

            <section>
                <h3>&gt; VERIFICATION</h3>
                <p>
                    Developed test cases to verify branch behavior using different register 
                    values and branch offsets.
                </p>

                <p>
                    Simulated the processor in Quartus and examined waveform outputs to verify 
                    correct Program Counter behavior and instruction execution.
                </p>
            </section>

            <section>
                <h3>&gt; TECHNICAL SKILLS</h3>
                <p>
                    Veriloh • CPU Architecture • Control Unit Design • Program Counter Logic 
                    • Instruction Decoding • Branch Instructions • Two's Complement • Quartus Prime 
                    • FPGA Implementation 
                </p>
            </section>

            <section>
                <h3>&gt; ENGINEERING FOCUS</h3>
                <p>
                    Computer Architecture • Processor Design • Digital 
                    Systems • FPGA Design • Control Logic
                </p>
            </section>

            <section>
                <h3>&gt; WHAT I LEARNED</h3>
                <p>
                    Developed a deeper understanding of how processor control logic affects program 
                    execution. This project strengthened my understanding of the relationship between 
                    instruction decoding, the Program Counter, conditional branching, and the hardware 
                    required to control processor behavior.
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
export default BranchControl;