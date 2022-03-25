from glob import glob
import yaml

yaml_files = glob('*.yaml')

for file in yaml_files:
    with open(file) as f:
        print(yaml.safe_load(f))
#loop through files and look for match in filename to json
#build out yaml config for topics, doc type, published date, any other info
#write yaml to file
#close file