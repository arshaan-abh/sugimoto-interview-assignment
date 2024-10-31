import SubmitForm from "./submit-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const SubmitReview = () => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Submit Review</CardTitle>
        <CardDescription>Fill the form and submit your review.</CardDescription>
      </CardHeader>

      <CardContent>
        <SubmitForm />
      </CardContent>

      <CardFooter>
        <p>Thanks in advance for your review!</p>
      </CardFooter>
    </Card>
  );
};

export default SubmitReview;
