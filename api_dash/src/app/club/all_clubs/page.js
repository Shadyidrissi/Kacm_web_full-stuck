"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Page() {
    const router = useRouter(); 

    const handelClick = (id) => {  // Accept ID as a parameter
        Swal.fire({
            title: "Edit This Club",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Edit",
            denyButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                router.push(`/clubs/edit/${id}`); // Pass ID in the URL
            } else if (result.isDenied) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Do you want to delete this?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Delete",
                    cancelButtonText: "Cancel",
                    dangerMode: true
                }).then((deleteResult) => {
                    if (deleteResult.isConfirmed) {
                        console.log(`Deleted item with ID: ${id}`); // Perform delete action
                        Swal.fire("Deleted!", "Your item has been deleted.", "success");
                    }
                });
            }
        });
    };

    return (
        <div className="home-page">
            <Navbar />
            <div className="club">
                <h2 className="title">Title</h2>
                <div className="cards-clubs">
                    {/* Pass ID (example: 123) when clicking the button */}
                    <button onClick={() => handelClick(123)} className="card-club">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png"
                            alt=""
                        />
                        <h3>Club Name</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;
