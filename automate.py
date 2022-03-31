from glob import glob
import yaml
import json

yaml_files = glob('public/assets/documents/.meta/*.yaml')
json_data = glob('spreadsheetformatted.json')

with open('spreadsheetformatted.json') as json_file:
    data = json.load(json_file)
    for file in yaml_files:
        with open(file, "r") as f:
            fileName = f.name.replace('public/assets/documents/.meta/', '')
            fileName = fileName.replace('.yaml', '')
            if not ' ' in fileName:
                dataToConvert = data.get(fileName)
                originalData = yaml.safe_load(f)
                if originalData is not None:
                    originalData['data'] = data.get(fileName, {})
                if originalData is None:
                    originalData['data'] = {}
        with open(file, "w") as f:
            yaml.safe_dump(originalData, f)
           
#loop through files and look for match in filename to json
#build out yaml config for topics, doc type, published date, any other info
#write yaml to file
#close file