import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

//@ts-ignore
const Card = ({ text, title = "Title BottomText", time = new Date().toLocaleString(), isPreview = true }) => {
    const history = useHistory();

    return (
        <main className="flex flex-wrap justify-center my-2">
            <div className="flex flex-col flex-wrap p-3 bg-gray-100 border border-blue-700 shadow-xl dark:bg-gray-600 rounded-xl">
                <section className="text-sm font-thin text-blue-400">{time}</section>
                <section className="text-2xl font-bold">{title}</section>
                <section className="flex flex-wrap font-normal text-gray-700 dark:text-blue-200 text-md">{text}</section>
                <section className="text-lg font-bold text-blue-900 dark:text-blue-400">@atlc lmao</section>
                <section className="text-3xl text-blue-400">
                    {isPreview ? (
                        <AiOutlineEye
                            onClick={() =>
                                history.push({
                                    state: { text, title, time, isPreview },
                                    pathname: `/details`
                                })
                            }
                        />
                    ) : (
                        <div className="flex justify-between m-auto">
                            <IoMdArrowRoundBack onClick={() => history.goBack()} />
                            <RiFileEditFill
                                onClick={() =>
                                    history.push({
                                        state: { text, title, time, isPreview },
                                        pathname: `/edit`
                                    })
                                }
                            />
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Card;

interface Users {
    id: string;
    name: string;
}

interface Tags {
    id: string;
    name: string;
}

interface Comment {
    id: string;
    user_id: Users["id"];
    card_id: CardAttrs["id"];
    text: string;
}

interface Board {
    id: string;
    viewable_ids: Users["id"][];
}

interface CardAttrs {
    id: string;
    board_id: Board["id"];
    created_by_id: Users["id"];
    assigned_to_id: Users["id"];
    tags: Tags[];
    column: "To-do" | "In-Progress" | "Review" | "Done";
    description: string;
    comments: Comment[];
    created_at: string;
    last_updated: string;
}
