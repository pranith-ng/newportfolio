import "./ProjectButton.css"


export default function ProjectButton() {

    return (

        <button className="button">
            <p className="button__text">
                <span style={{ "--index": "0" }}>V</span>
                <span style={{ "--index": "1" }}>I</span>
                <span style={{ "--index": "2" }}>E</span>
                <span style={{ "--index": "3" }}>W</span>
                <span style={{ "--index": "4" }}> </span>
                <span style={{ "--index": "5" }}>P</span>
                <span style={{ "--index": "6" }}>R</span>
                <span style={{ "--index": "7" }}>O</span>
                <span style={{ "--index": "8" }}>J</span>
                <span style={{ "--index": "9" }}>E</span>
                <span style={{ "--index": "10" }}>C</span>
                <span style={{ "--index": "11" }}>T</span>
                <span style={{ "--index": "12" }}> </span>
            </p>

            <div className="button__circle">
                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon"
                    width="14"
                >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    ></path>
                </svg>

                <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon button__icon--copy"
                >
                    <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>


        </button>

    );
}
