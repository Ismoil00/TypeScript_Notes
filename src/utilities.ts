// || Partial Utility:
interface Assignment {
  studentID: string;
  titles: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assignment, ...propsToUpdate };
};

const assign1: Assignment = {
  studentID: "compsci123",
  titles: "Final Project",
  grade: 1,
};

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// || Required & Readonly:
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // do some logic
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// || Record:
const hexColorMap: Record<string, string> = {
  red: "f00",
  green: "0f0",
  blue: "00f",
};

type Students = "Ismoil" | "Umed";
type letterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, letterGrades> = {
  Ismoil: "A",
  Umed: "B",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Ismoil: { assign1: 85, assign2: 100 },
  Umed: { assign1: 74, assign2: 95 },
};

// || Pick & Omit:
type AssignPick = Pick<Assignment, "studentID" | "verified">;
type AssignOmit = Omit<Assignment, "studentID" | "verified">;

const scorePick: AssignPick = { studentID: "56af6", verified: false };
const scoreOmit: AssignOmit = { grade: 95, titles: "New Class" };

// || Exclude & Extract:
type ExcludeType = Exclude<letterGrades, "F">;
type ExtractType = Extract<letterGrades, "A" | "B">;

// || Nonnullable:
type allPossibleTypes = "Somon" | "Sorbon" | null | undefined ;
type namesOnly = NonNullable<allPossibleTypes>