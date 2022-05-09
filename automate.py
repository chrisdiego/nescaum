from glob import glob
import yaml
import json
import logging

yaml_files = glob('public/assets/documents/.meta/*.yaml')
json_data = glob('spreadsheetformatted.json')

with open('spreadsheetformatted.json') as json_file:
    data = json.load(json_file)
    loadedFiles = []
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
            loadedFiles.append(fileName)
            logging.warning(len(loadedFiles))