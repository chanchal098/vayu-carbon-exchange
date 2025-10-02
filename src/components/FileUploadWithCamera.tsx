import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Upload, 
  X, 
  FileText,
  Image as ImageIcon,
  MapPin,
  Check
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FileUploadProps {
  type: 'photo' | 'gps' | 'mrv' | 'document';
  label: string;
  onUpload?: (files: File[]) => void;
  multiple?: boolean;
}

const FileUploadWithCamera = ({ type, label, onUpload, multiple = false }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const getIcon = () => {
    switch (type) {
      case 'photo': return <Camera className="w-8 h-8" />;
      case 'gps': return <MapPin className="w-8 h-8" />;
      case 'mrv': return <FileText className="w-8 h-8" />;
      case 'document': return <FileText className="w-8 h-8" />;
      default: return <Upload className="w-8 h-8" />;
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    
    if (selectedFiles.length === 0) return;

    setFiles(prev => multiple ? [...prev, ...selectedFiles] : selectedFiles);

    // Generate previews for images
    if (type === 'photo') {
      selectedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => multiple ? [...prev, reader.result as string] : [reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }

    toast({
      title: "Files uploaded",
      description: `${selectedFiles.length} file(s) uploaded successfully`,
      className: "border-success/20 text-success",
    });

    if (onUpload) {
      onUpload(selectedFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const openCamera = () => {
    cameraInputRef.current?.click();
  };

  const openFileBrowser = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <Card className="border-dashed border-2 border-border/50 hover:border-primary/50 transition-colors">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="mx-auto mb-3 text-muted-foreground">
              {getIcon()}
            </div>
            <h3 className="font-medium mb-1">{label}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {type === 'photo' ? 'Upload images or take photo' : 'Upload files'}
            </p>
            
            <div className="flex gap-2 justify-center">
              {type === 'photo' && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={openCamera}
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Take Photo
                </Button>
              )}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={openFileBrowser}
              >
                <Upload className="w-4 h-4 mr-2" />
                Browse Files
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept={type === 'photo' ? 'image/*' : '*'}
              multiple={multiple}
              onChange={handleFileSelect}
            />
            
            {type === 'photo' && (
              <input
                ref={cameraInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                capture="user"
                multiple={multiple}
                onChange={handleFileSelect}
              />
            )}
          </div>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Check className="w-4 h-4 text-success" />
            Uploaded Files ({files.length})
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                {type === 'photo' && previews[index] ? (
                  <div className="relative aspect-square rounded-lg overflow-hidden border border-border/20">
                    <img 
                      src={previews[index]} 
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        type="button"
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 p-3 bg-muted/20 rounded-lg border border-border/20">
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs truncate flex-1">{file.name}</span>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadWithCamera;
