<template>
  <div class="test">
    <Box>
      <div class="prose">
        <h1>Title</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam aliquam iste tempore provident mollitia, ratione doloremque soluta in laudantium reprehenderit reiciendis harum ipsam consectetur. Corporis perspiciatis possimus laborum est!
        </p>

        <p>
          Lorem ipsum dolor sit amet <a href="#" target="_blank">consectetur</a> adipisicing elit. Culpa, numquam aliquam iste tempore provident mollitia, ratione doloremque soluta in laudantium reprehenderit reiciendis <strong>harum</strong> ipsam consectetur. Corporis perspiciatis possimus laborum est!
        </p>

        <hr>

        <h2>Subtitle</h2>

        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>

        <hr>

        <h3>Others</h3>

        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit.</blockquote>

        <p>
          <code>print("Please input the number of columns...");print("Please input the number of columns...");print("Please input the number of columns...");</code>
        </p>

        <p>
          <pre>console.log('wow!'); // <a href="#" target="_blank">Ojo cuidado</a></pre>
        </p>

        <p>
          <pre><code>
--[[ FARM program v0.5 ]]--
print("farm [# spaces forward] [# columns]")

args = { ... }

if args ~= nil and #args < 1 then
    print("Please input how far forward the turtle should go...")
    y = io.read()
else
    y = args[1]
end
if args ~= nil and #args < 2 then
    print("Please input the number of columns there are...")
    x = io.read()
else
    x = args[2]
end

if x == nil or y == nil then
    return
end

print("You should place the turtle at the X.")
for rowsSample=0,y-1,1 do
    print(string.rep('.',x))
end
print("X"..string.rep('.',x-1))
print("Input Y to continue.")
confirmation = io.read()

if confirmation ~= "Y" then
    print("Cancelled farming...")
    return
end

alternating = false
function alternateTurn()
    if alternating then
        turtle.turnLeft()
        turtle.forward()
        turtle.turnLeft()
    else
        turtle.turnRight()
        turtle.forward()
        turtle.turnRight()
    end
end

function checkCrop()
    local exists, data = turtle.inspectDown()
    if exists and data.name == "minecraft:wheat" and data.metadata == 7 then
        turtle.digDown()
        turtle.placeDown()
    end
end

for ax=1,x,1 do
    for ay=1,y,1 do
        checkCrop()
        turtle.forward()
    end
    checkCrop()
    alternateTurn()
    alternating = not alternating
end

for invSlot=1,16,1 do
    turtle.select(invSlot)
    turtle.dropDown()
end

turtle.turnLeft()
for homeForward=1,x,1 do
    turtle.forward()
end
turtle.turnRight()
</code></pre>
        </p>
      </div>
    </Box>

    <Box>
      <div>
        <h1>Title</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam aliquam iste tempore provident mollitia, ratione doloremque soluta in laudantium reprehenderit reiciendis harum ipsam consectetur. Corporis perspiciatis possimus laborum est!
        </p>

        <p>
          Lorem ipsum dolor sit amet <a href="#" target="_blank">consectetur</a> adipisicing elit. Culpa, numquam aliquam iste tempore provident mollitia, ratione doloremque soluta in laudantium reprehenderit reiciendis <strong>harum</strong> ipsam consectetur. Corporis perspiciatis possimus laborum est!
        </p>

        <hr>

        <h2>Subtitle</h2>

        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>

        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>

        <hr>

        <h3>Others</h3>

        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit.</blockquote>

        <p>
          <code class="code">print("Please input the number of columns...");print("Please input the number of columns...");print("Please input the number of columns...");</code>
        </p>

        <p>
          <pre class="code-pre">
console.log('wow!'); // <a href="#" target="_blank">Ojo cuidado</a>
</pre>
        </p>

        <p>
          <pre class="code-pre">
<code>
--[[ FARM program v0.5 ]]--
print("farm [# spaces forward] [# columns]")

args = { ... }

if args ~= nil and #args < 1 then
    print("Please input how far forward the turtle should go...")
    y = io.read()
else
    y = args[1]
end
</code>
</pre>
        </p>
      </div>
    </Box>

    <Box>
      <div class="prose">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-orange">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-pink">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-cyan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-green">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>
      </div>
    </Box>

    <Box>
      <div class="prose">
        <p class="text-primary-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>

        <p class="text-primary-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, maiores officia error deleniti harum delectus reprehenderit ipsum temporibus corrupti id vitae quos aut doloribus!
        </p>
      </div>
    </Box>
  </div>
</template>

<style lang="scss" scoped>
.test {
  @apply grid grid-cols-2 gap-9;
}
</style>
