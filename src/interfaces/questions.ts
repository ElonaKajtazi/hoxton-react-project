interface IAnswer {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: null | string
    answer_f: null | string
}

interface ITags {
    name: string
}

export interface IQuestion {
    id: number;
    question: string;
    description: string
    answers: IAnswer
    multiple_correct_answers: string;
    correct_answers: IAnswer;
    correct_answer: null | string
    explanation: string
    tip: string | null
    tags: ITags []
    category: string;
    difficulty: string;
}

