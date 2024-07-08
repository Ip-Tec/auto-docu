import React from "react";
import ViewTemplates from "@/components/templates/ViewTemplates";

function TemplatesPaga() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4 p-4 dark:bg-gray-950 ">
          Templates Paga
        </h1>
        <ViewTemplates />
      </div>
    </>
  );
}

export default TemplatesPaga;
