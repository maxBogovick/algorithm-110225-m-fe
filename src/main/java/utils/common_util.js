export function logTestCase(description, actual, expected) {
  // Преобразуем массивы в строки для сравнения
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);

  const passed = actualString === expectedString;
  console.log(`${description} => ${passed ? '✅ Пройден' : `❌ Не пройден (Ожидалось: ${expectedString}, Получено: ${actualString})`}`);
}


export function logTestCaseWithException(description, func, expectedExceptionMessage) {
  try {
    func();
    console.log(`❌ Не пройден (Ожидалось исключение: ${expectedExceptionMessage}, но исключение не было выброшено)`);
  } catch (e) {
    if (e.message === expectedExceptionMessage) {
      console.log(`✅ Пройден: ${description}`);
    } else {
      console.log(`❌ Не пройден (Ожидалось: ${expectedExceptionMessage}, Получено: ${e.message})`);
    }
  }
}

class TreePrinter {
  /**
   * Creates a new TreePrinter instance.
   * @param {Function} getLabel - Function that takes a node and returns its string label
   * @param {Function} getLeft - Function that takes a node and returns its left child (or null)
   * @param {Function} getRight - Function that takes a node and returns its right child (or null)
   */
  constructor(getLabel, getLeft, getRight) {
    this.getLabel = getLabel;
    this.getLeft = getLeft;
    this.getRight = getRight;

    // Configuration options with default values
    this.outStream = console.log;  // JavaScript equivalent of PrintStream
    this.squareBranches = false;   // Use ASCII box drawing characters vs /\ branches
    this.lrAgnostic = false;       // Whether to treat single children uniformly
    this.hspace = 2;               // Minimum horizontal space between adjacent nodes
    this.tspace = 1;               // Space between trees when printing multiple
  }

  /**
   * Sets the output function (equivalent to setPrintStream in Java)
   * @param {Function} outStream - Function to call for each line of output
   */
  setPrintStream(outStream) {
    this.outStream = outStream;
  }

  /**
   * Configures whether to use square/box drawing characters for branches
   * @param {boolean} squareBranches - true for ┌─┴─┐ style, false for /\ style
   */
  setSquareBranches(squareBranches) {
    this.squareBranches = squareBranches;
  }

  /**
   * Sets whether single children should be treated uniformly (affects branch drawing)
   * @param {boolean} lrAgnostic - true to draw single children with vertical line
   */
  setLrAgnostic(lrAgnostic) {
    this.lrAgnostic = lrAgnostic;
  }

  /**
   * Sets minimum horizontal spacing between adjacent node labels
   * @param {number} hspace - Number of spaces (must be positive)
   */
  setHspace(hspace) {
    this.hspace = hspace;
  }

  /**
   * Sets spacing between trees when printing multiple trees
   * @param {number} tspace - Number of spaces and blank lines between trees
   */
  setTspace(tspace) {
    this.tspace = tspace;  // Note: Original Java code had bug using hspace instead of tspace
  }

  /**
   * Main method to print a single tree in ASCII art format
   * @param {*} root - The root node of the tree to print
   */
  printTree(root) {
    const treeLines = this.buildTreeLines(root);
    this.printTreeLines(treeLines);
  }

  /**
   * Prints multiple trees across the page with automatic line wrapping
   * @param {Array} trees - Array of root nodes to print
   * @param {number} lineWidth - Maximum width of output before wrapping to next row
   */
  printTrees(trees, lineWidth) {
    // Build tree representations and calculate dimensions for each tree
    const allTreeLines = [];
    const treeWidths = [];
    const minLeftOffsets = [];
    const maxRightOffsets = [];

    // Process each tree to get its ASCII representation and dimensions
    for (let i = 0; i < trees.length; i++) {
      const treeNode = trees[i];
      const treeLines = this.buildTreeLines(treeNode);
      allTreeLines.push(treeLines);

      minLeftOffsets[i] = this.minLeftOffset(treeLines);
      maxRightOffsets[i] = this.maxRightOffset(treeLines);
      treeWidths[i] = maxRightOffsets[i] - minLeftOffsets[i] + 1;
    }

    // Print trees in rows, fitting as many as possible per row
    let nextTreeIndex = 0;
    while (nextTreeIndex < trees.length) {
      // Determine how many trees fit in current row
      let sumOfWidths = treeWidths[nextTreeIndex];
      let endTreeIndex = nextTreeIndex + 1;

      while (endTreeIndex < trees.length &&
        sumOfWidths + this.tspace + treeWidths[endTreeIndex] < lineWidth) {
        sumOfWidths += (this.tspace + treeWidths[endTreeIndex]);
        endTreeIndex++;
      }
      endTreeIndex--;

      // Find the height of the tallest tree in this row
      const maxLines = Math.max(...allTreeLines
        .slice(nextTreeIndex, endTreeIndex + 1)
        .map(lines => lines.length));

      // Print all trees in this row, line by line
      for (let lineIndex = 0; lineIndex < maxLines; lineIndex++) {
        let rowLine = '';

        for (let treeIndex = nextTreeIndex; treeIndex <= endTreeIndex; treeIndex++) {
          const treeLines = allTreeLines[treeIndex];

          if (lineIndex >= treeLines.length) {
            // Tree is shorter than others, pad with spaces
            rowLine += this.spaces(treeWidths[treeIndex]);
          } else {
            // Calculate padding needed to align this tree properly
            const leftSpaces = -(minLeftOffsets[treeIndex] - treeLines[lineIndex].leftOffset);
            const rightSpaces = maxRightOffsets[treeIndex] - treeLines[lineIndex].rightOffset;
            rowLine += this.spaces(leftSpaces) + treeLines[lineIndex].line + this.spaces(rightSpaces);
          }

          // Add spacing between trees (but not after the last tree)
          if (treeIndex < endTreeIndex) {
            rowLine += this.spaces(this.tspace);
          }
        }
        console.log(rowLine);
      }

      // Add vertical spacing between rows of trees
      for (let i = 0; i < this.tspace; i++) {
        console.log('');
      }

      nextTreeIndex = endTreeIndex + 1;
    }
  }

  /**
   * Helper method to print the lines of a single tree
   * @param {Array} treeLines - Array of TreeLine objects representing the tree
   */
  printTreeLines(treeLines) {
    if (treeLines.length > 0) {
      const minLeftOffset = this.minLeftOffset(treeLines);
      const maxRightOffset = this.maxRightOffset(treeLines);

      for (const treeLine of treeLines) {
        const leftSpaces = -(minLeftOffset - treeLine.leftOffset);
        const rightSpaces = maxRightOffset - treeLine.rightOffset;
        this.outStream(this.spaces(leftSpaces) + treeLine.line + this.spaces(rightSpaces));
      }
    }
  }

  /**
   * Core recursive method that builds the ASCII representation of a tree
   * @param {*} root - Current node being processed
   * @returns {Array} Array of TreeLine objects representing this subtree
   */
  buildTreeLines(root) {
    // Base case: empty tree
    if (root == null) return [];

    const rootLabel = this.getLabel(root);
    const leftTreeLines = this.buildTreeLines(this.getLeft(root));
    const rightTreeLines = this.buildTreeLines(this.getRight(root));

    const leftCount = leftTreeLines.length;
    const rightCount = rightTreeLines.length;
    const minCount = Math.min(leftCount, rightCount);
    const maxCount = Math.max(leftCount, rightCount);

    // Calculate optimal spacing between left and right subtrees
    // We need to find the minimum distance where the jagged edges don't overlap
    let maxRootSpacing = 0;
    for (let i = 0; i < minCount; i++) {
      const spacing = leftTreeLines[i].rightOffset - rightTreeLines[i].leftOffset;
      if (spacing > maxRootSpacing) maxRootSpacing = spacing;
    }

    let rootSpacing = maxRootSpacing + this.hspace;
    if (rootSpacing % 2 === 0) rootSpacing++; // Ensure odd spacing for symmetry

    const allTreeLines = [];

    // Handle ANSI escape codes (for colored output) when calculating string length
    const renderedRootLabel = rootLabel.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '');

    // Add the root node line
    allTreeLines.push(new TreeLine(
      rootLabel,
      -Math.floor((renderedRootLabel.length - 1) / 2),
      Math.floor(renderedRootLabel.length / 2)
    ));

    // Calculate how much to adjust left and right subtree positions
    let leftTreeAdjust = 0;
    let rightTreeAdjust = 0;

    // Handle different cases: no children, only left child, only right child, both children
    if (leftTreeLines.length === 0) {
      if (rightTreeLines.length !== 0) {
        // Only right subtree exists
        if (this.squareBranches) {
          if (this.lrAgnostic) {
            allTreeLines.push(new TreeLine("│", 0, 0)); // Unicode vertical line
          } else {
            allTreeLines.push(new TreeLine("└┐", 0, 1));
            rightTreeAdjust = 1;
          }
        } else {
          allTreeLines.push(new TreeLine("\\", 1, 1));
          rightTreeAdjust = 2;
        }
      }
    } else if (rightTreeLines.length === 0) {
      // Only left subtree exists
      if (this.squareBranches) {
        if (this.lrAgnostic) {
          allTreeLines.push(new TreeLine("│", 0, 0));
        } else {
          allTreeLines.push(new TreeLine("┌┘", -1, 0));
          leftTreeAdjust = -1;
        }
      } else {
        allTreeLines.push(new TreeLine("/", -1, -1));
        leftTreeAdjust = -2;
      }
    } else {
      // Both left and right subtrees exist
      if (this.squareBranches) {
        const adjust = Math.floor(rootSpacing / 2) + 1;
        const horizontal = "─".repeat(Math.floor(rootSpacing / 2)); // Unicode horizontal line
        const branch = "┌" + horizontal + "┴" + horizontal + "┐";
        allTreeLines.push(new TreeLine(branch, -adjust, adjust));
        rightTreeAdjust = adjust;
        leftTreeAdjust = -adjust;
      } else {
        if (rootSpacing === 1) {
          allTreeLines.push(new TreeLine("/ \\", -1, 1));
          rightTreeAdjust = 2;
          leftTreeAdjust = -2;
        } else {
          // Create multiple branch lines for wider spacing
          for (let i = 1; i < rootSpacing; i += 2) {
            const branches = "/" + this.spaces(i) + "\\";
            allTreeLines.push(new TreeLine(branches, -Math.floor((i + 1) / 2), Math.floor((i + 1) / 2)));
          }
          rightTreeAdjust = Math.floor(rootSpacing / 2) + 1;
          leftTreeAdjust = -(Math.floor(rootSpacing / 2) + 1);
        }
      }
    }

    // Combine lines from left and right subtrees with proper spacing and offset adjustments
    for (let i = 0; i < maxCount; i++) {
      if (i >= leftTreeLines.length) {
        // Only right subtree has remaining lines
        const rightLine = rightTreeLines[i];
        rightLine.leftOffset += rightTreeAdjust;
        rightLine.rightOffset += rightTreeAdjust;
        allTreeLines.push(rightLine);
      } else if (i >= rightTreeLines.length) {
        // Only left subtree has remaining lines
        const leftLine = leftTreeLines[i];
        leftLine.leftOffset += leftTreeAdjust;
        leftLine.rightOffset += leftTreeAdjust;
        allTreeLines.push(leftLine);
      } else {
        // Both subtrees have lines to combine
        const leftLine = leftTreeLines[i];
        const rightLine = rightTreeLines[i];
        const adjustedRootSpacing = (rootSpacing === 1 ? (this.squareBranches ? 1 : 3) : rootSpacing);
        const spaceBetween = adjustedRootSpacing - leftLine.rightOffset + rightLine.leftOffset;

        const combined = new TreeLine(
          leftLine.line + this.spaces(spaceBetween) + rightLine.line,
          leftLine.leftOffset + leftTreeAdjust,
          rightLine.rightOffset + rightTreeAdjust
        );
        allTreeLines.push(combined);
      }
    }

    return allTreeLines;
  }

  /**
   * Finds the minimum left offset among all tree lines
   * @param {Array} treeLines - Array of TreeLine objects
   * @returns {number} Minimum left offset
   */
  minLeftOffset(treeLines) {
    if (treeLines.length === 0) return 0;
    return Math.min(...treeLines.map(line => line.leftOffset));
  }

  /**
   * Finds the maximum right offset among all tree lines
   * @param {Array} treeLines - Array of TreeLine objects  
   * @returns {number} Maximum right offset
   */
  maxRightOffset(treeLines) {
    if (treeLines.length === 0) return 0;
    return Math.max(...treeLines.map(line => line.rightOffset));
  }

  /**
   * Creates a string of n spaces
   * @param {number} n - Number of spaces to create
   * @returns {string} String containing n spaces
   */
  spaces(n) {
    return ' '.repeat(Math.max(0, n)); // Ensure we don't create negative spaces
  }
}

/**
 * Helper class representing a single line in the tree's ASCII representation
 * Each line knows its content and its left/right offset positions
 */
class TreeLine {
  /**
   * @param {string} line - The text content of this line
   * @param {number} leftOffset - How far this line extends to the left of center
   * @param {number} rightOffset - How far this line extends to the right of center
   */
  constructor(line, leftOffset, rightOffset) {
    this.line = line;
    this.leftOffset = leftOffset;
    this.rightOffset = rightOffset;
  }
}

// Export the classes for use in Node.js or module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TreePrinter, TreeLine };
}

export function defaultPrinter() {
  return new TreePrinter(
    node => node.value + "",  // getLabel: convert value to string
    node => node.left,              // getLeft: get left child
    node => node.right              // getRight: get right child
  );

}