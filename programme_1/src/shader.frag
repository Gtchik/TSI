#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
  //Couleur du fragment
  float r=gl_FragCoord.x/600.0;
  float g=gl_FragCoord.y/600.0;
  color = vec4(r,g,0.0,1.0);
}
