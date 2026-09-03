function AssemblyProject() {
    return(
        <main className="project-page">
            <h1>&gt; ASSEMBLY ACCOUNT PROCESSOR</h1>

            <section>
                <h3>OVERVIEW</h3>
                <p>
                    Designed and implemented an assembly program for a 
                    simple computer system to process a series of financial 
                    transactions and calculate a final account balance.
                </p>

                <p> 
                    This project required working directly with memory, 
                    registers, pointers, arithmetic operations, branching, 
                    and bitwise operations.
                </p>
            </section>
            
            <section>
                <h3>&gt; PROJECT REQUIREMENTS</h3>
                <p>
                    The program processes deposits, withdrawals, interest,
                    and point-of-sale transactions while maintaining the 
                    account balance.
                </p>

                <p>
                    The program also performs a series of required bitwise
                    and data-manipulation operations, including masking, 
                    circular shifting, logical shifting, concentation, and
                    finding maximum and minimum values.
                </p>
            </section>

            <section>
                <h3>&gt; IMPLEMENTATION</h3>
                <p>
                   Implemented an assembly program that accesses transaction 
                   data from memory, processes each transaction, updates the
                   account balance, and stores required results in designated 
                   memory locations. 
                </p>

                <p>
                    A pointer was used to sequentially access the transaction 
                    array, while conditional branching controlled program flow
                    based on transaction type and program conditions.
                </p>
            </section>

            <section>
                <h3>&gt; MEMORY MANAGEMENT</h3>
                <p>
                    Transaction data was stored beginning at memory location 0x20.
                    The program utilized designated memory locations for required 
                    outputs, including the student ID and final account balance, and
                    used load/store operations to transfer data between memory and
                    registers.
                </p>
            </section>

            <section>
                <h3>&gt; DEBUGGING & TESTING</h3>
                <p>
                    Tested program functionality using multiple transaction 
                    sequences and monitored register and memoru values 
                    throughout execution.
                </p>

                <p>
                    Debugging focused on verifying arithmetic calculations, 
                    memory addressing, pointer operations, branching behavior,
                    and final output values.
                </p>
            </section>

            <section>
                <h3>&gt; TECHNICAL SKILLS</h3>
                <p>
                    Assembly • CPU Architecture • Registers • Memory Addressing 
                    • Pointers • Branching • Bitwise Operations • Logical & 
                    Circular Shifts • Debugging 
                </p>
            </section>

            <section>
                <h3>&gt; ENGINEERING FOCUS</h3>
                <p>
                    Computer Architecture • Low-Level Programming • Digital 
                    Systems • Embedded Systems
                </p>
            </section>

            <section>
                <h3>&gt; WHAT I LEARNED</h3>
                <p>
                    Developed a deeper understanding of low-level programming 
                    and the relationship between software instructions, 
                    processor architecture, registers, and memory. The project
                    strengthened my ability to implement and debug programs within
                    a defined instruction set and hardware architecture.
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
export default AssemblyProject;