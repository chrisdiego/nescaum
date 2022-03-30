from glob import glob
import yaml
import json

yaml_files = glob('public/assets/documents/.meta/*.yaml')
json_data = glob('spreadsheetformatted.json')

with open('spreadsheetformatted.json') as json_file:
    data = json.load(json_file)
    for file in yaml_files:
        with open(file, "w") as f:
            fileName = f.name.replace('public/assets/documents/.meta/', '')
            fileName = fileName.replace('.yaml', '')
            if not ' ' in fileName:
                dataToConvert = data.get(fileName)
                originalData = yaml.load(f)
                originalData['data'] = data.get(fileName)
                yaml.dump(originalData, f)
           
#loop through files and look for match in filename to json
#build out yaml config for topics, doc type, published date, any other info
#write yaml to file
#close file