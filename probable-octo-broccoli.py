import argparse
import random

# get_random_line method takes readlines() output and retuns random, single, stripped line
def get_random_line(lines):
    return lines[random.randrange(len(lines))].rstrip()

# Main
if __name__ == "__main__":
    # Handle arguments
    parser = argparse.ArgumentParser("probable-octo-broccoli")
    parser.add_argument('-c', '--count', help="Count of names to generate. Default is 10.", type=int, default=10)
    args = parser.parse_args()

    # Read files
    nouns = open("nouns.txt", "r").readlines()
    adjectives = open("adjectives.txt", "r").readlines()

    # Print random lines
    for i in range(args.count):
        print(get_random_line(adjectives) + "-" + get_random_line(nouns))