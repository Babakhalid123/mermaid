import { Component, ElementRef, ViewChild } from '@angular/core';
import mermaid from 'mermaid';
import { design } from 'src/assets/designInput';

@Component({
    selector: 'class-diagram-component',
    templateUrl: './class-diagram.component.html',
    styleUrls: ['./class-diagram.component.less']
})
export class ClassDiagramComponent {

    public mermaidText: any


    constructor() { }

    ngOnInit(): void {
        this.mermaidText = this.generateMermaidDiagram(design);
    }

    ngAfterViewInit() {
        mermaid.initialize({ startOnLoad: true });
    }

    generateMermaidDiagram(jsonData: any[]): any {
        let mermaidText = 'classDiagram\n'; // Adding the 'classDiagram' keyword

        jsonData.forEach((classInfo: any) => {
            mermaidText += `class ${classInfo.name}\n`;
            classInfo.properties.forEach((prop: string) => (mermaidText += `  ${classInfo.name} : ${prop}\n`));
            classInfo.methods.forEach((method: string) => (mermaidText += `  ${classInfo.name} : ${method}\n`));
        });

        jsonData.forEach((classInfo: any) => {
            if (classInfo.parent) {
                // Check if 'props' is defined in the current classInfo
                if (classInfo.props) {
                    mermaidText += `view_configuration -- |> ${classInfo.name} : ${classInfo.props}\n`;
                } else {
                    mermaidText += `${classInfo.parent} -- |> ${classInfo.name}\n`;
                }
            }
        });

        return mermaidText;
    }
}
